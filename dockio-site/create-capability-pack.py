from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
root=Path(__file__).resolve().parent.parent
out=root/'public/downloads/dockio-capability-statement.pdf'
pdfmetrics.registerFont(TTFont('DV','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DVB','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
styles=getSampleStyleSheet()
for name in ['Normal','BodyText']:styles[name].fontName='DV';styles[name].fontSize=9.3;styles[name].leading=12.5;styles[name].textColor=HexColor('#314b3f')
styles.add(ParagraphStyle(name='TitleD',fontName='DVB',fontSize=28,leading=32,textColor=HexColor('#173c2d'),spaceAfter=15))
styles.add(ParagraphStyle(name='HeadD',fontName='DVB',fontSize=13,leading=18,textColor=HexColor('#173c2d'),spaceBefore=13,spaceAfter=8))
styles.add(ParagraphStyle(name='SmallD',parent=styles['Normal'],fontSize=8,leading=12))
styles.add(ParagraphStyle(name='KickerD',fontName='DVB',fontSize=8,leading=12,textColor=HexColor('#a54d32'),spaceAfter=12))
def p(text,style='BodyText'):return Paragraph(text,styles[style])
def head(text):return p(text,'HeadD')
def rows(data,widths):
 t=Table([[p(a),p(b)] for a,b in data],colWidths=widths,hAlign='LEFT')
 t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5),('LINEBELOW',(0,0),(-1,-1),.5,HexColor('#d1dcc9')),('BACKGROUND',(0,0),(0,-1),HexColor('#edf2e8'))]))
 return t
def page(canvas,doc):
 canvas.setFillColor(HexColor('#173c2d'));canvas.rect(0,A4[1]-13,A4[0],13,fill=1,stroke=0)
 canvas.setFont('DVB',11);canvas.drawString(45,A4[1]-43,'dockio.');canvas.setFont('DV',8);canvas.drawRightString(A4[0]-45,A4[1]-43,'SUPPLIER CAPABILITY STATEMENT')
 canvas.setStrokeColor(HexColor('#d1dcc9'));canvas.line(45,42,A4[0]-45,42)
 canvas.setFont('DV',7.5);canvas.drawString(45,28,'dockio.in  |  sankalp@dockio.in  |  31 October 2026');canvas.drawRightString(A4[0]-45,28,f'{doc.page} / 2')
flow=[p('ENTERPRISE AI / EMBEDDED TEAMS','KickerD'),p('Add AI specialists to your enterprise team.','TitleD'),p('Dockio-employed professionals work within your AI programme, systems, controls and delivery priorities. Named people, availability and terms are confirmed in the proposal.'),head('Company at a glance'),rows([
 ('Legal entity','Dockio Technosolutions Private Limited'),('Operating base','Mumbai, India. India-based remote, hybrid or on-site arrangements are discussed against the requirement; other countries require feasibility review.'),('Leadership','Sankalp Shirish More, Director'),('Partner status','OpenAI Select Partner. Dockio supplies independent services; OpenAI does not employ, screen or guarantee Dockio personnel.')],[115,390]),head('Two engagement models'),p('<b>Individual specialist:</b> extend an existing client team under agreed day-to-day direction and scope.<br/><b>Managed team:</b> a proposed combination of roles with a delivery lead, defined responsibilities, milestones and reporting.'),head('Role coverage'),rows([
 ('AI engineer','AI workflows, retrieval, tools, model APIs and integration.'),('Solution architect','Architecture, identity, data boundaries and deployment design.'),('AI product lead','Use cases, value hypotheses, backlog and acceptance criteria.'),('Evaluation specialist','Quality criteria, evaluation sets, failure analysis and release evidence.'),('Adoption lead','Enablement, workflow change, feedback and meaningful repeat use.'),('Programme principal','Delivery governance, dependencies, escalation and sponsor decisions.')],[145,360]),Spacer(1,12),p('These are role capabilities, not CVs, a pre-vetted roster or a claim of an immediately available bench. Request named profiles for your specific requirement.','SmallD'),PageBreak(),p('PROCUREMENT / READINESS','KickerD'),p('Evaluate the evidence. Agree the commitment.','TitleD'),p('Use this checklist before approving an engagement. Items below require confirmation; this statement is not a certification, insurance certificate, service-level commitment or representation that every document is already available.'),head('Evidence and terms to confirm'),rows([
 ('Company & tax','Current incorporation, registration, tax and authorised-signatory documents applicable to the contracting entity.'),('Employment & screening','Named-person employment arrangement, technical assessment, client-required background checks and completion evidence.'),('Insurance','Current professional and cyber insurance certificates, insured entity, limits, scope, exclusions and expiry. Coverage is not verified in this statement.'),('Security & privacy','Applicable policies and evidence for access, devices, confidentiality, approved AI use, data handling, incident escalation and offboarding.'),('Commercial terms','Rates, term, any minimum commitment, invoicing, expenses, notice, liability, IP ownership and confidentiality in the MSA/SOW.'),('Continuity','Replacement triggers, notice, transition support, overlap, knowledge transfer and associated charges agreed in writing.'),('Delivery evidence','Named credentials, permitted references or anonymised evidence where available. Individual career experience is distinct from Dockio-contracted engagements.')],[125,380]),head('Onboarding sequence'),p('<b>1. Define:</b> role, seniority, work, location, duration and client owner.<br/><b>2. Review:</b> candidate fit, availability, assessment and screening requirements.<br/><b>3. Agree:</b> proposal, responsibilities, terms and access boundaries.<br/><b>4. Onboard:</b> approvals, client environment, delivery rhythm and review points.'),Spacer(1,9),p('No universal deployment time or minimum duration is stated. Start dates depend on candidate availability, checks, contracting and client approvals. Confidential evidence should be exchanged only through an agreed channel, under NDA where appropriate.','SmallD'),head('Start the supplier discussion'),p('<b>RFI / RFP:</b> sankalp@dockio.in<br/><b>Service:</b> https://www.dockio.in/services/embedded-ai-teams/<br/><b>Procurement:</b> https://www.dockio.in/procurement/'),Spacer(1,10),p('OpenAI product licences and usage terms are separate. Partner status does not imply regulatory approval, guaranteed outcomes or separate product-specialisation badges.','SmallD')]
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=45,leftMargin=45,topMargin=72,bottomMargin=58,title='Dockio - Embedded AI Teams Supplier Capability Statement',author='Dockio Technosolutions Private Limited')
doc.build(flow,onFirstPage=page,onLaterPages=page)
print(out)
