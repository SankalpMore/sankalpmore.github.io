"""Rebuild the original Dockio brand assets. Requires Pillow; not part of the site build."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

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

image = Image.new('RGB', (1200, 630), CREAM)
draw = ImageDraw.Draw(image)
draw.rectangle((0, 0, 1199, 11), fill=FOREST)
mark(draw, 64, 53, 66, FOREST, 6)
draw.text((145, 59), 'dockio', font=ImageFont.truetype(BOLD, 48), fill=FOREST)
draw.ellipse((326, 102, 337, 113), fill=ORANGE)
draw.text((70, 178), 'Make AI work.', font=ImageFont.truetype(BOLD, 76), fill=FOREST)
draw.text((70, 272), 'In your business.', font=ImageFont.truetype(FONT, 76), fill=FOREST)
draw.text((74, 389), 'Enterprise AI implementation', font=ImageFont.truetype(FONT, 28), fill=FOREST)
draw.line((74, 463, 1126, 463), fill=SAGE, width=2)
for index, (label, text) in enumerate((('01', 'Prioritise'), ('02', 'Implement'), ('03', 'Realise value'))):
    x = 74 + index*355
    draw.text((x, 501), label, font=ImageFont.truetype(BOLD, 18), fill=FOREST)
    draw.text((x+45, 492), text, font=ImageFont.truetype(FONT, 28), fill=FOREST)
draw.rectangle((1125, 70, 1141, 417), fill=ORANGE)
image.save(ASSETS / 'dockio-social.png', optimize=True)
