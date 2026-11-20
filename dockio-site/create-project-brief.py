"""Generate Dockio's one-page project capability statement."""

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
OUTPUT = ASSETS / "dockio-project-capability.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
WIDTH, HEIGHT = A4
MARGIN = 39
INNER = WIDTH - MARGIN * 2
DARK = HexColor("#172d24")
TEXT = HexColor("#293e34")
MUTED = HexColor("#486054")
RUST = HexColor("#934328")
PALE = HexColor("#edf2ed")
LINE = HexColor("#c9d6cd")

for face, file in (
    ("DockioSans", "DejaVuSans.ttf"),
    ("DockioBold", "DejaVuSans-Bold.ttf"),
):
    pdfmetrics.registerFont(TTFont(face, str(FONT_DIR / file)))


def paragraph(pdf, value, x, top, width, *, size=10, leading=14.3,
              font="DockioSans", color=TEXT):
    style = ParagraphStyle(
        "statement", fontName=font, fontSize=size, leading=leading,
        textColor=color, splitLongWords=False,
    )
    item = Paragraph(value, style)
    _, height = item.wrap(width, HEIGHT)
    item.drawOn(pdf, x, HEIGHT - top - height)
    return top + height


def rule(pdf, top):
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.65)
    pdf.line(MARGIN, HEIGHT - top, WIDTH - MARGIN, HEIGHT - top)


def label(pdf, value, x, top, width):
    return paragraph(
        pdf, value, x, top, width, size=8.4, leading=11.5,
        font="DockioBold", color=RUST,
    )


def scope(pdf, x, top, width, heading, description):
    title_end = paragraph(
        pdf, heading, x, top, width, size=13.25, leading=17,
        font="DockioBold", color=DARK,
    )
    return paragraph(pdf, description, x, title_end + 6, width)


def requirement_row(pdf, top, heading, description):
    rule(pdf, top)
    title_end = paragraph(
        pdf, heading, MARGIN, top + 8, 121, size=10.4, leading=14.3,
        font="DockioBold", color=DARK,
    )
    description_end = paragraph(pdf, description, MARGIN + 128, top + 8, INNER - 128)
    return max(title_end, description_end) + 9


def action(pdf, value, url, x, baseline):
    pdf.setFillColor(DARK)
    pdf.setFont("DockioBold", 9.4)
    pdf.drawString(x, HEIGHT - baseline, value)
    width = pdfmetrics.stringWidth(value, "DockioBold", 9.4)
    pdf.setStrokeColor(RUST)
    pdf.setLineWidth(0.9)
    pdf.line(x, HEIGHT - baseline - 3, x + width, HEIGHT - baseline - 3)
    pdf.linkURL(url, (x, HEIGHT - baseline - 4, x + width, HEIGHT - baseline + 11))
    return x + width


def build():
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("Enterprise AI implementation | Dockio project capability statement")
    pdf.setAuthor("Dockio Technosolutions Private Limited")
    pdf.setSubject("Project scope, acceptance, handover and procurement")
    pdf.setCreator("Dockio Technosolutions Private Limited")
    pdf.drawImage(str(ASSETS / "dockio-logo.png"), MARGIN, HEIGHT - 58, 28, 28)
    pdf.setFillColor(DARK)
    pdf.setFont("DockioBold", 19)
    pdf.drawString(MARGIN + 36, HEIGHT - 51.5, "dockio.")
    pdf.setFont("DockioSans", 9)
    pdf.drawRightString(WIDTH - MARGIN, HEIGHT - 48, "Project capability statement")
    rule(pdf, 74)

    label(pdf, "AI IMPLEMENTATION &amp; VALUE SPRINT", MARGIN, 90, INNER)
    top = paragraph(
        pdf, "Enterprise AI implementation", MARGIN, 108, INNER,
        size=30.5, leading=37.5, font="DockioBold", color=DARK,
    )
    top = paragraph(
        pdf,
        "Commission a paid sprint for one workflow. Dockio connects your systems, tests the "
        "workflow with your team and documents what is ready for production.",
        MARGIN, top + 9, INNER, size=12, leading=17.4,
    ) + 22

    label(pdf, "TWO POSSIBLE SCOPES", MARGIN, top, INNER)
    column = (INNER - 26) / 2
    start = top + 21
    first = scope(pdf, MARGIN, start, column, "Banking service operations",
        "Connect a service queue to an approved policy collection. Staff review drafts "
        "and their source passages. Unanswered cases go to a designated reviewer. "
        "Compare handling time, answer quality and escalations with the baseline.")
    second = scope(pdf, MARGIN + column + 26, start, column, "Codex for engineering teams",
        "Evaluate Codex on one repository and one pull-request workflow. Maintainers "
        "retain merge approval. Compare review time and rework on similar changes, "
        "then review quality and usage cost before wider rollout.")
    pdf.setStrokeColor(LINE)
    pdf.line(MARGIN + column + 13, HEIGHT - start,
             MARGIN + column + 13, HEIGHT - max(first, second))

    top = paragraph(
        pdf, "What the engagement covers", MARGIN, max(first, second) + 21, INNER,
        size=16.2, leading=21, font="DockioBold", color=DARK,
    ) + 7
    rows = [
        ("Scope and access",
         "Dockio documents the integration and permissions. You name a workflow owner, "
         "grant access to approved systems and provide representative cases and reviewers."),
        ("Acceptance",
         "Before the build, agree the baseline, test window, quality threshold and "
         "conditions that block release. Dockio records test results and open issues. "
         "Your designated owner decides whether to proceed, revise or stop."),
        ("Production handover",
         "A production scope covers deployment, a written operating guide, escalation "
         "contacts and a walkthrough with the team taking ownership."),
        ("Optional support",
         "A separate agreement defines monitoring, service hours, incident response, "
         "change approvals and the responsibilities of each team."),
    ]
    for heading, description in rows:
        top = requirement_row(pdf, top, heading, description)

    top += 4
    inset = 13
    band_height = 68
    pdf.setFillColor(PALE)
    pdf.rect(MARGIN, HEIGHT - top - band_height, INNER, band_height, stroke=0, fill=1)
    label(pdf, "FEES AND TIMING", MARGIN + inset, top + 9, INNER - inset * 2)
    band_end = paragraph(
        pdf, "Your proposal lists the sprint fee, agreed outputs and schedule. Model usage, "
        "hosting and production support are identified separately. You approve scope changes.",
        MARGIN + inset, top + 25, INNER - inset * 2,
    )
    if band_end + 6 > top + band_height:
        raise ValueError("Commercial terms exceed the allotted space.")

    end = top + band_height + 20
    paragraph(pdf, "Procurement contact", MARGIN, end, INNER, size=12.5,
              leading=16, font="DockioBold", color=DARK)
    end = paragraph(
        pdf, "Sankalp Shirish More, Director | Dockio Technosolutions Private Limited, Mumbai, India",
        MARGIN, end + 20, INNER, size=9.3, leading=13, color=MUTED,
    )
    baseline = end + 20
    if baseline > HEIGHT - 27:
        raise ValueError("The contact details no longer fit on one page.")
    x = action(pdf, "Submit a project brief", "https://www.dockio.in/project-enquiry/", MARGIN, baseline)
    x = action(pdf, "View the sprint", "https://www.dockio.in/services/implementation-sprint/", x + 25, baseline)
    action(pdf, "sankalp@dockio.in", "mailto:sankalp@dockio.in", x + 25, baseline)
    pdf.showPage()
    pdf.save()


if __name__ == "__main__":
    build()
