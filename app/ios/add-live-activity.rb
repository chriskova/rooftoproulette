# Adds the Live Activity extension (RRLive) to the Xcode project and embeds it in the app.
# Safe to run more than once. CI runs it before archiving: gem install xcodeproj && ruby app/ios/add-live-activity.rb
require "xcodeproj"
path = File.join(__dir__, "App", "App.xcodeproj")
proj = Xcodeproj::Project.open(path)
app = proj.targets.find { |t| t.name == "App" } or abort "no App target"
if proj.targets.any? { |t| t.name == "RRLive" }
  puts "RRLive already in the project"; exit 0
end
main = proj.main_group
grp = main.new_group("RRLive", "RRLive")
attrs = grp.new_file("RRLiveAttributes.swift")
widget = grp.new_file("RRLiveWidget.swift")
grp.new_file("Info.plist")
appgrp = main.children.find { |g| g.display_name == "App" }
crawl = appgrp.new_file("CrawlNotify.swift")

ext = proj.new_target(:app_extension, "RRLive", :ios, "16.2", proj.products_group, :swift)
ext.add_file_references([widget, attrs])
app.add_file_references([crawl, attrs])
%w[WidgetKit SwiftUI].each do |fw|
  ref = proj.frameworks_group.new_file("System/Library/Frameworks/#{fw}.framework", :sdk_root)
  ext.frameworks_build_phase.add_file_reference(ref, true)
end
appver = app.build_configurations.first.build_settings["MARKETING_VERSION"] || "1.0"
ext.build_configurations.each do |c|
  b = c.build_settings
  b["PRODUCT_BUNDLE_IDENTIFIER"] = "com.rooftoproulette.app.RRLive"
  b["PRODUCT_NAME"] = "$(TARGET_NAME)"
  b["INFOPLIST_FILE"] = "RRLive/Info.plist"
  b["GENERATE_INFOPLIST_FILE"] = "NO"
  b["IPHONEOS_DEPLOYMENT_TARGET"] = "16.2"
  b["SWIFT_VERSION"] = "5.0"
  b["TARGETED_DEVICE_FAMILY"] = "1,2"
  b["MARKETING_VERSION"] = appver
  b["CURRENT_PROJECT_VERSION"] = "1"
  b["SKIP_INSTALL"] = "YES"
  b["CODE_SIGN_STYLE"] = "Automatic"
  b["LD_RUNPATH_SEARCH_PATHS"] = ["$(inherited)", "@executable_path/Frameworks", "@executable_path/../../Frameworks"]
  b["APPLICATION_EXTENSION_API_ONLY"] = "YES"
  b["ASSETCATALOG_COMPILER_GENERATE_SWIFT_ASSET_SYMBOL_EXTENSIONS"] = "NO"
end
# embed it in the app (PlugIns folder) and build it first
embed = app.new_copy_files_build_phase("Embed Foundation Extensions")
embed.symbol_dst_subfolder_spec = :plug_ins
bf = embed.add_file_reference(ext.product_reference, true)
bf.settings = { "ATTRIBUTES" => ["RemoveHeadersOnCopy"] }
app.add_dependency(ext)
proj.save
puts "Added RRLive (com.rooftoproulette.app.RRLive) and embedded it in the app"
