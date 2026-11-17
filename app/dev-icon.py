# Recolours the launcher icons teal for the RR Dev build (run by android.yml, never committed as output).
import sys,glob,colorsys
from PIL import Image
for f in glob.glob(sys.argv[1]+"/mipmap-*/ic_launcher*.png"):
    im=Image.open(f).convert("RGBA");px=im.load()
    for y in range(im.height):
        for x in range(im.width):
            r,g,b,a=px[x,y]
            h,s,v=colorsys.rgb_to_hsv(r/255,g/255,b/255)
            if s>0.25:  # only the coloured pin; white and grey stay
                r2,g2,b2=colorsys.hsv_to_rgb((h+0.42)%1,s,v);px[x,y]=(int(r2*255),int(g2*255),int(b2*255),a)
    im.save(f)
print("RR Dev icons recoloured")
