"""Rebuild the original Dockio brand assets. Requires Pillow; not part of the site build."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ASSETS = Path(__file__).resolve().parent.parent / 'public' / 'assets'
FOREST = '#172b23'
SAGE = '#dce7dc'
ORANGE = '#f28661'
CREAM = '#fafbf7'
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def mark(draw, x, y, size, color, width):
    scale = size / 32
    for left, right in ((4, 18), (14, 28)):
        draw.rectangle((x + left*scale, y + 7*scale, x + right*scale, y + 25*scale), outline=color, width=width)
    draw.rectangle((x + 13*scale, y + 12*scale, x + 19*scale, y + 20*scale), fill=color)

logo = Image.new('RGB', (512, 512), FOREST)
mark(ImageDraw.Draw(logo), 32, 32, 448, ORANGE, 34)
logo.save(ASSETS / 'dockio-logo.png', optimize=True)
logo.resize((96, 96), Image.Resampling.LANCZOS).save(ASSETS / 'favicon.png', optimize=True)

image = ImageOps.fit(Image.open(ASSETS / 'team-at-work.webp').convert('RGB'), (1200, 630))
shade = Image.new('RGBA', image.size)
shade_draw = ImageDraw.Draw(shade)
for column in range(820):
    opacity = round(112 * (1 - column / 820))
    shade_draw.line((column, 0, column, 630), fill=(8, 21, 15, opacity))
image = Image.alpha_composite(image.convert('RGBA'), shade).convert('RGB')
draw = ImageDraw.Draw(image)
mark(draw, 52, 40, 52, ORANGE, 4)
draw.text((116, 44), 'dockio.', font=ImageFont.truetype(BOLD, 35), fill=CREAM)
heading = ImageFont.truetype(BOLD, 67)
for index, line in enumerate(('Enterprise AI,', 'built with', 'your team.')):
    draw.text((52, 218 + index * 71), line, font=heading, fill=CREAM)
image.quantize(colors=200, method=Image.Quantize.MEDIANCUT).save(ASSETS / 'dockio-social.png', optimize=True)
