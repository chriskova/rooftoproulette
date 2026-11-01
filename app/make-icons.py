# Placeholder app icons and splash screens from the web app's icons. Swap icons/maskable-512.png and
# icons/icon-512.png for the final logo and re-run: python3 app/make-icons.py
import os,glob
from PIL import Image
R=os.path.dirname(os.path.abspath(__file__));ROOT=os.path.dirname(R)
BG=(11,13,18)
full=Image.open(os.path.join(ROOT,'icons/icon-512.png')).convert('RGBA')
mask=Image.open(os.path.join(ROOT,'icons/maskable-512.png')).convert('RGBA')
A=os.path.join(R,'android/app/src/main/res')
for d,px in {'mdpi':48,'hdpi':72,'xhdpi':96,'xxhdpi':144,'xxxhdpi':192}.items():
    full.resize((px,px),Image.LANCZOS).save(f'{A}/mipmap-{d}/ic_launcher.png')
    full.resize((px,px),Image.LANCZOS).save(f'{A}/mipmap-{d}/ic_launcher_round.png')
    fg=int(px*108/48)   # adaptive icon foreground (108dp canvas); the maskable art already keeps a safe zone
    mask.resize((fg,fg),Image.LANCZOS).save(f'{A}/mipmap-{d}/ic_launcher_foreground.png')
open(f'{A}/values/ic_launcher_background.xml','w').write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#0B0D12</color>\n</resources>\n')
def splash(path):
    w,h=Image.open(path).size;im=Image.new('RGB',(w,h),BG);s=int(min(w,h)*.28)
    ic=full.resize((s,s),Image.LANCZOS);im.paste(ic,((w-s)//2,(h-s)//2),ic);im.save(path)
for p in glob.glob(f'{A}/drawable*/splash.png'):splash(p)
# iOS
I=os.path.join(R,'ios/App/App/Assets.xcassets')
for p in glob.glob(f'{I}/AppIcon.appiconset/*.png'):
    w,h=Image.open(p).size;im=Image.new('RGB',(w,h),BG);ic=mask.resize((w,h),Image.LANCZOS);im.paste(ic,(0,0),ic);im.save(p)
for p in glob.glob(f'{I}/Splash.imageset/*.png'):splash(p)
print('icons done')
