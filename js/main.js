'use strict';

// =============================================================================
// TRANSLATIONS
// =============================================================================

const translations = {

  // ---------------------------------------------------------------------------
  // CZECH
  // ---------------------------------------------------------------------------
  cs: {
    nav: {
      home:      'Úvod',
      why:       'Proč my',
      locations: 'Trasy',
      how:       'Jak to funguje',
      gallery:   'Galerie',
      package:   'Balíček',
      reviews:   'Recenze',
      faq:       'Otázky',
      contact:   'Kontakt',
      cta:       'Nezávazná poptávka',
    },
    hero: {
      badge:       'Zážitkový teambuilding v Praze',
      headline:    'Teambuilding, na který váš tým bude dlouho vzpomínat.',
      subheadline: 'Nudné přednášky a trapné ledovce jsou minulostí. Naše šifrovací hra prohloubí spolupráci, rozesměje i ty nejzamlklejší kolegy — a Praha bude perfektní kulisa.',
      cta:         'Nezávazná poptávka',
    },
    problem: {
      text:     '"Zase ten teambuilding?" — Tohle nikdo říkat nechce.',
      solution: 'Proto jsme to vytvořili.',
    },
    why: {
      title: 'Šest důvodů, proč to funguje',
      1: { title: 'Žádná příprava za vaší strany',       desc: 'Postaráme se o vše od A do Z. Vy přijdete, my se postaráme — vaším úkolem je jen užít si den.' },
      2: { title: 'Pro každý tým od 9 do 300 lidí',      desc: 'Hra se dynamicky přizpůsobí velikosti skupiny. Menší týmy závodí intenzivněji, větší se přirozeně rozdělí do skupinek.' },
      3: { title: 'Celá Praha jako hřiště',               desc: 'Pět ikonických tras. Historické centrum, tajemný Hradčany, bohémský Karlín nebo filmová místa — vyberte kulisu, která sedí vašemu týmu.' },
      4: { title: 'Čtyři jazyky, jeden zážitek',         desc: 'Hra běží plynule v češtině, angličtině, němčině i španělštině. Ideální pro mezinárodní týmy a expaty.' },
      5: { title: 'Okamžité výsledky a srovnání',        desc: 'Live scoreboard ukazuje pořadí v reálném čase. Zdravá rivalita pohání týmy kupředu a dodává hře šťávu.' },
      6: { title: 'Záruka spokojenosti',                  desc: 'Pokud tým nebude nadšený, vrátíme peníze. Bez řečí. Za osm let provozu jsme tuto záruku uplatnili dvakrát.' },
    },
    locations: {
      title:    'Pět pražských tras',
      subtitle: 'Každá trasa vypráví jiný příběh. Vyberte tu, která nejlépe odpovídá vaší firemní kultuře.',
      oldtown:  { name: 'Staré Město',          desc: 'Gotické uličky, barokní průjezdy a šifry ukryté v kamenných fasádách. Nejoblíbenější trasa — plná překvapení na každém rohu.',     difficulty: 'střední' },
      hradcany: { name: 'Hradčany & Malá Strana', desc: 'Královská okrsa, strmé schody a výhledy přes celou Prahu. Trasa s největší vizuální odměnou — každý týmový selfie stojí za to.', difficulty: 'náročná' },
      vysehrad: { name: 'Vyšehrad',              desc: 'Legendami opředená pevnost nad Vltavou. Klidnější tempo, více prostoru pro rozhovor — oblíbená u kreativních a technologických firem.', difficulty: 'lehká' },
      karlin:   { name: 'Karlín',                desc: 'Nejrychleji rostoucí čtvrť Prahy. Street art, startup scéna a šifry inspirované moderní architekturou. Svěží alternativa k historii.', difficulty: 'střední' },
      movie:    { name: 'Filmová Praha',         desc: 'Procházejte kulisami Amadea, Mission: Impossible i Knivese v záloze. Unikátní trasa, která funguje jako záruka ledolamu.', difficulty: 'střední' },
      difficulty: {
        easy:   'lehká',
        medium: 'střední',
        hard:   'náročná',
      },
    },
    how: {
      title: 'Jak to funguje',
      step1: { title: 'Poptávka a přizpůsobení',      desc: 'Vyplníte krátký formulář. Do 24 hodin vám zavoláme, projdeme detaily a ušijeme hru přesně na míru vašemu týmu — velikost, jazyk, obtížnost, firemní hodnoty.' },
      step2: { title: 'Den D: start a hra',           desc: 'Setkáte se s herním průvodcem v dohodnutém místě. Dostanete aplikaci a instrukce. Pak už řídí váš tým — a Praha vás pohltí.' },
      step3: { title: 'Cílová fotka a výsledky',      desc: 'Na konci trasy čeká slavnostní vyhlášení, skupinová fotografie a digitální certifikát pro každého účastníka. Moment, který si všichni uloží.' },
    },
    gallery: {
      title:   'Jak to vypadá v akci',
      caption: 'Stovky firemních týmů. Tisíce sdílených momentů.',
    },
    package: {
      title:    'Vše, co potřebujete, v jednom balíčku',
      subtitle: 'Žádné skryté poplatky. Žádné nepříjemné překvapení na faktuře.',
      cta:      'Chci zjistit cenu',
      feature1:  'Přístup do herní aplikace pro celý tým',
      feature2:  'Profesionální herní průvodce po celou dobu',
      feature3:  'Tisk nebo digitální verze šifer a materiálů',
      feature4:  'Live scoreboard a sledování polohy týmů',
      feature5:  'Fotografická dokumentace akce',
      feature6:  'Digitální certifikáty pro všechny účastníky',
      feature7:  'Výběr ze 5 tras a nastavení obtížnosti',
      feature8:  'Podpora v češtině, angličtině, němčině a španělštině',
      feature9:  'Přizpůsobení firemnímu tématu nebo hodnotám',
      feature10: 'Pojištění odpovědnosti a krizový plán',
    },
    reviews: {
      title:     'Co říkají ostatní HR manažeři',
      aggregate: '★★★★★ 4,9 — průměr z 127 hodnocení',
      source: {
        google:     'Google',
        facebook:   'Facebook',
        tripadvisor:'TripAdvisor',
      },
    },
    blog: {
      title:    'Tipy a inspirace',
      subtitle: 'Praktické rady pro firemní akce v Praze',
      readmore: 'Číst dál',
      minread:  'min čtení',
    },
    faq: {
      title: 'Nejčastější otázky',
      1: {
        q: 'Pro kolik lidí je hra vhodná?',
        a: 'Hra je navržena pro skupiny od 9 do 300 účastníků. Menší skupiny hrají jako jeden celek, větší se automaticky rozdělí do soutěžních týmů o 4–6 lidech. Optimum je 20–60 lidí.',
      },
      2: {
        q: 'Jak dlouho hra trvá?',
        a: 'Standardní hra trvá 2,5–3,5 hodiny aktivní hry. K tomu připočtěte 15 minut briefingu na začátku a závěrečné vyhlášení (30 minut). Celkově počítejte s půl dnem.',
      },
      3: {
        q: 'Je hra vhodná pro zahraniční kolegy, kteří neumí česky?',
        a: 'Absolutně. Celá hra běží v češtině, angličtině, němčině i španělštině — nebo v libovolné kombinaci těchto jazyků. Aplikace i tištěné šifry jsou plně lokalizovány.',
      },
      4: {
        q: 'Co se stane, když prší?',
        a: 'Trasy jsou provozovány za každého počasí. Průvodce má vždy záložní plán pro přesun pod střechu. V případě extrémního počasí hru bezplatně přeložíme na náhradní termín.',
      },
      5: {
        q: 'Mohu si přizpůsobit hru firemním tématem nebo hodnotami?',
        a: 'Ano — a je to jedna z nejoblíbenějších možností. Do hry můžeme zakomponovat firemní hodnoty, produkty, interní vtipy nebo název firmy jako klíčový prvek šifry. Stačí to zmínit v poptávce.',
      },
      6: {
        q: 'Musím mít chytrý telefon?',
        a: 'Aplikace funguje na iOS i Androidu. Jeden telefon postačí na celý tým, ale doporučujeme jeden na dvě osoby. Mobilní data postačují, WiFi není nutná.',
      },
      7: {
        q: 'Jak probíhá platba a co obsahuje cena?',
        a: 'Cenu kalkulujeme individuálně podle počtu lidí, trasy a míry přizpůsobení. Vydáváme fakturu se splatností 14 dní. V ceně je vše popsané v sekci Balíček — žádné skryté poplatky.',
      },
      8: {
        q: 'Jak rychle je potřeba rezervovat?',
        a: 'V sezóně (duben–říjen) doporučujeme rezervovat alespoň 3 týdny předem, oblíbené termíny (pátek, skupiny nad 50 lidí) se obsazují ještě dříve. Mimo sezónu jsme flexibilnější.',
      },
      9: {
        q: 'Máte zkušenosti s velkými korporacemi?',
        a: 'Za osm let jsme organizovali teambuildingy pro Škodu Auto, Avast, McKinsey, Deloitte, Českou spořitelnu a desítky dalších. Reference rádi poskytneme na vyžádání.',
      },
    },
    contact: {
      title:    'Poptejte se nezávazně',
      subtitle: 'Vyplňte formulář a do 24 hodin se vám ozveme s nabídkou na míru.',
      name:          'Jméno a příjmení',
      company:       'Název firmy',
      email:         'Firemní e-mail',
      phone:         'Telefon',
      teamsize:      'Počet účastníků',
      teamsizePlaceholder: 'min. 9',
      language:      'Jazyk hry',
      location:      'Preferovaná trasa',
      date:          'Preferované datum',
      time:          'Preferovaný čas',
      flexible:      'Datum ještě nevím — dejte mi vědět dostupnost',
      requirements:  'Speciální požadavky nebo přání',
      referral:      'Jak jste se o nás dozvěděli?',
      submit:        'Odeslat poptávku',
      success:       'Díky! Vaše poptávka dorazila. Ozveme se vám do 24 hodin.',
      langOptions: {
        cs: 'Čeština',
        en: 'Angličtina',
        de: 'Němčina',
        es: 'Španělština',
        fr: 'Francouzština',
        pl: 'Polština',
        it: 'Italština',
      },
      locationOptions: {
        oldtown:  'Staré Město',
        hradcany: 'Hradčany',
        vysehrad: 'Vyšehrad',
        karlin:   'Karlín',
        movie:    'Filmová Praha',
        unsure:   'Poradíte mi?',
      },
    },
    footer: {
      tagline:   'Firemní teambuilding v Praze, který si všichni zapamatují.',
      copyright: '© 2026 TreasureHuntPrague.cz — Všechna práva vyhrazena',
      privacy:   'Zásady ochrany osobních údajů',
      terms:     'Obchodní podmínky',
    },
  },

  // ---------------------------------------------------------------------------
  // ENGLISH
  // ---------------------------------------------------------------------------
  en: {
    nav: {
      home:      'Home',
      why:       'Why Us',
      locations: 'Routes',
      how:       'How It Works',
      gallery:   'Gallery',
      package:   'Package',
      reviews:   'Reviews',
      faq:       'FAQ',
      contact:   'Contact',
      cta:       'Get a Quote',
    },
    hero: {
      badge:       'Corporate Team-Building in Prague',
      headline:    'The team-building your people will actually want to attend.',
      subheadline: 'No awkward icebreakers. No PowerPoints. Just your team solving cipher puzzles across one of Europe\'s most beautiful cities — and genuinely having fun doing it.',
      cta:         'Get a Quote',
    },
    problem: {
      text:     '"Not another team-building day." — Nobody should ever have to think that.',
      solution: 'That\'s exactly why we built this.',
    },
    why: {
      title: 'Six reasons it works',
      1: { title: 'Zero preparation on your side',          desc: 'We handle everything end-to-end. You show up; we take care of the rest. Your only job is to enjoy the day.' },
      2: { title: 'Built for teams from 9 to 300',          desc: 'The game scales dynamically to your group size. Smaller teams compete head-to-head; larger groups split naturally into rival squads.' },
      3: { title: 'All of Prague as your playground',       desc: 'Five iconic routes. Historic Old Town, regal Hradčany, up-and-coming Karlín, or Prague\'s famous film locations — choose the backdrop that fits your company culture.' },
      4: { title: 'Four languages, one seamless experience', desc: 'The game runs fluently in Czech, English, German, and Spanish. Perfect for international teams and companies with expat employees.' },
      5: { title: 'Live leaderboard, real competition',     desc: 'A real-time scoreboard keeps the energy high and the banter flowing. Healthy rivalry is the secret sauce of every great team-building event.' },
      6: { title: 'Satisfaction guaranteed',                desc: 'If your team isn\'t delighted, we\'ll refund you in full. No questions asked. In eight years of operation, we\'ve had to honour that guarantee twice.' },
    },
    locations: {
      title:    'Five Prague Routes',
      subtitle: 'Each route tells a different story. Pick the one that matches your company\'s personality.',
      oldtown:  { name: 'Old Town',              desc: 'Gothic laneways, baroque courtyards, and ciphers hidden in stone facades. Our most popular route — a surprise waiting around every corner.',            difficulty: 'medium' },
      hradcany: { name: 'Hradčany & Malá Strana', desc: 'The royal quarter, steep cobbled climbs, and sweeping views across the city. The most visually rewarding route — every team photo is frame-worthy.', difficulty: 'hard' },
      vysehrad: { name: 'Vyšehrad',              desc: 'A legend-wrapped fortress above the Vltava. A slightly calmer pace with more room for conversation — popular with creative and tech companies.',         difficulty: 'easy' },
      karlin:   { name: 'Karlín',                desc: 'Prague\'s fastest-growing district. Street art, startup energy, and ciphers inspired by modern architecture. A fresh alternative to pure history.',     difficulty: 'medium' },
      movie:    { name: 'Prague Film Locations', desc: 'Walk the sets of Amadeus, Mission: Impossible, and Knives Out. A uniquely cinematic route that doubles as the world\'s best conversation starter.',     difficulty: 'medium' },
      difficulty: {
        easy:   'easy',
        medium: 'medium',
        hard:   'hard',
      },
    },
    how: {
      title: 'How It Works',
      step1: { title: 'Enquiry & customisation',    desc: 'Fill in the short form. We\'ll call you within 24 hours, go through the details, and tailor the game precisely to your team — size, language, difficulty, company values.' },
      step2: { title: 'Game day: brief & play',     desc: 'Meet your game guide at the agreed location. Receive the app and instructions. From that point, your team takes the wheel — and Prague takes over.' },
      step3: { title: 'Finish line & celebrations', desc: 'The final clue leads to a ceremonial finish, a group photo, and a digital certificate for every participant. A moment everyone will actually share on LinkedIn.' },
    },
    gallery: {
      title:   'See It in Action',
      caption: 'Hundreds of corporate teams. Thousands of shared moments.',
    },
    package: {
      title:    'Everything included, nothing hidden',
      subtitle: 'One clear price. No hidden charges. No invoice surprises.',
      cta:      'See pricing',
      feature1:  'Full app access for every team member',
      feature2:  'Professional game guide for the entire event',
      feature3:  'Printed or digital cipher packs and materials',
      feature4:  'Live leaderboard and real-time team tracking',
      feature5:  'Professional photo documentation of the event',
      feature6:  'Digital completion certificates for all participants',
      feature7:  'Choice of 5 routes and adjustable difficulty',
      feature8:  'Full support in Czech, English, German, and Spanish',
      feature9:  'Custom theming around your company values or brand',
      feature10: 'Public liability insurance and contingency plan',
    },
    reviews: {
      title:     'What other HR managers say',
      aggregate: '★★★★★ 4.9 — based on 127 verified reviews',
      source: {
        google:      'Google',
        facebook:    'Facebook',
        tripadvisor: 'TripAdvisor',
      },
    },
    blog: {
      title:    'Tips & Inspiration',
      subtitle: 'Practical advice for corporate events in Prague',
      readmore: 'Read more',
      minread:  'min read',
    },
    faq: {
      title: 'Frequently Asked Questions',
      1: {
        q: 'How many people can take part?',
        a: 'The game is designed for groups of 9 to 300 participants. Smaller groups play as a single team; larger groups are automatically split into competing squads of 4–6 people. The sweet spot is 20–60 participants.',
      },
      2: {
        q: 'How long does it take?',
        a: 'The active game runs for 2.5–3.5 hours. Add 15 minutes for the opening briefing and 30 minutes for the closing ceremony. Plan for roughly half a day in total.',
      },
      3: {
        q: 'We have international colleagues who don\'t speak Czech. Is that a problem?',
        a: 'Not at all. The entire game runs in Czech, English, German, and Spanish — or any combination thereof. The app and all printed materials are fully localised.',
      },
      4: {
        q: 'What happens if it rains?',
        a: 'All routes operate in all weather. Your guide always has a contingency for moving indoors. In the event of truly extreme conditions, we\'ll reschedule you at no extra charge.',
      },
      5: {
        q: 'Can the game be customised around our company theme?',
        a: 'Yes — and it\'s one of our most popular options. We can weave your company values, products, internal culture, or brand name directly into the ciphers. Just mention it in your enquiry.',
      },
      6: {
        q: 'Does everyone need a smartphone?',
        a: 'The app runs on iOS and Android. One phone per team is sufficient, though we recommend one between two people. Mobile data is enough — no WiFi required.',
      },
      7: {
        q: 'How does payment work, and what does the price include?',
        a: 'Pricing is calculated individually based on group size, route, and level of customisation. We issue an invoice with 14-day payment terms. Everything listed in the Package section is included — there are no add-on fees.',
      },
      8: {
        q: 'How far in advance should we book?',
        a: 'During peak season (April–October), we recommend booking at least 3 weeks ahead. Popular slots (Fridays, groups over 50) fill even earlier. We\'re more flexible outside peak season.',
      },
      9: {
        q: 'Do you have experience with large corporate clients?',
        a: 'Over eight years we\'ve run events for Škoda Auto, Avast, McKinsey, Deloitte, Česká spořitelna, and dozens of others. We\'re happy to provide references on request.',
      },
    },
    contact: {
      title:    'Request a Quote',
      subtitle: 'Fill in the form and we\'ll come back to you within 24 hours with a tailored proposal.',
      name:          'Full name',
      company:       'Company name',
      email:         'Work email',
      phone:         'Phone number',
      teamsize:      'Number of participants',
      teamsizePlaceholder: 'min. 9',
      language:      'Game language',
      location:      'Preferred route',
      date:          'Preferred date',
      time:          'Preferred time',
      flexible:      'Date not decided yet — please share your availability',
      requirements:  'Special requirements or requests',
      referral:      'How did you hear about us?',
      submit:        'Send Enquiry',
      success:       'Thank you! Your enquiry has been received. We\'ll be in touch within 24 hours.',
      langOptions: {
        cs: 'Czech',
        en: 'English',
        de: 'German',
        es: 'Spanish',
        fr: 'French',
        pl: 'Polish',
        it: 'Italian',
      },
      locationOptions: {
        oldtown:  'Old Town',
        hradcany: 'Hradčany',
        vysehrad: 'Vyšehrad',
        karlin:   'Karlín',
        movie:    'Prague Film Locations',
        unsure:   'Help me choose',
      },
    },
    footer: {
      tagline:   'Corporate team-building in Prague that people actually remember.',
      copyright: '© 2026 TreasureHuntPrague.cz — All rights reserved',
      privacy:   'Privacy Policy',
      terms:     'Terms & Conditions',
    },
  },

  // ---------------------------------------------------------------------------
  // GERMAN
  // ---------------------------------------------------------------------------
  de: {
    nav: {
      home:      'Startseite',
      why:       'Warum wir',
      locations: 'Routen',
      how:       'So funktioniert es',
      gallery:   'Galerie',
      package:   'Leistungen',
      reviews:   'Bewertungen',
      faq:       'FAQ',
      contact:   'Kontakt',
      cta:       'Angebot anfragen',
    },
    hero: {
      badge:       'Firmen-Teambuilding in Prag',
      headline:    'Das Teambuilding-Erlebnis, über das noch Monate später gesprochen wird.',
      subheadline: 'Keine langweiligen Seminare, keine peinlichen Eisbrecher-Spiele. Stattdessen: Ihr Team löst gemeinsam Rätsel durch eine der schönsten Altstädte Europas — und hat dabei wirklich Spaß.',
      cta:         'Angebot anfragen',
    },
    problem: {
      text:     '"Schon wieder ein Teambuilding-Tag?" — Das sollte niemand denken müssen.',
      solution: 'Genau deshalb haben wir dieses Format entwickelt.',
    },
    why: {
      title: 'Sechs Gründe, warum es funktioniert',
      1: { title: 'Null Aufwand auf Ihrer Seite',                   desc: 'Wir übernehmen die gesamte Organisation von A bis Z. Sie kommen an — wir kümmern uns um den Rest. Ihre Aufgabe ist es einzig, den Tag zu genießen.' },
      2: { title: 'Geeignet für Gruppen von 9 bis 300 Personen',    desc: 'Das Spiel skaliert dynamisch mit der Gruppengröße. Kleine Teams treten direkt gegeneinander an; größere Gruppen werden automatisch in gleichstarke Mannschaften aufgeteilt.' },
      3: { title: 'Ganz Prag als Spielfeld',                        desc: 'Fünf ikonische Routen stehen zur Wahl: historisches Altstadtviertel, das majestätische Hradschin, das aufstrebende Karlín oder die berühmten Filmkulissen Prags — wählen Sie die Atmosphäre, die zu Ihrem Unternehmen passt.' },
      4: { title: 'Vier Sprachen, ein reibungsloses Erlebnis',      desc: 'Das Spiel läuft vollständig auf Tschechisch, Englisch, Deutsch und Spanisch — ideal für internationale Teams mit mehrsprachiger Belegschaft.' },
      5: { title: 'Live-Rangliste für echten Wettbewerb',           desc: 'Ein Echtzeit-Scoreboard hält die Spannung während der gesamten Veranstaltung aufrecht. Gesunder Wettstreit ist das Geheimnis erfolgreicher Teamerlebnisse.' },
      6: { title: 'Zufriedenheitsgarantie',                         desc: 'Sollte Ihr Team nicht begeistert sein, erstatten wir den vollen Betrag — ohne Rückfragen. In acht Jahren Betrieb haben wir diese Garantie zweimal in Anspruch nehmen müssen.' },
    },
    locations: {
      title:    'Fünf Routen durch Prag',
      subtitle: 'Jede Route erzählt eine andere Geschichte. Wählen Sie die, die am besten zur Persönlichkeit Ihres Unternehmens passt.',
      oldtown:  { name: 'Altstadt',                 desc: 'Gotische Gassen, barocke Innenhöfe und Chiffren, die in Steinfassaden verborgen sind. Unsere beliebteste Route — mit einer Überraschung um jede Ecke.',                  difficulty: 'mittel' },
      hradcany: { name: 'Hradschin & Kleinseite',   desc: 'Das Königsviertel mit steilen Kopfsteinpflastergassen und Panoramablick über die gesamte Stadt. Die visuell beeindruckendste Route — jedes Teamfoto ist rahmenreif.',   difficulty: 'schwer' },
      vysehrad: { name: 'Vyšehrad',                 desc: 'Eine sagenumwobene Festung über der Moldau. Etwas ruhigeres Tempo, mehr Raum für Gespräche — besonders beliebt bei Kreativ- und Technologieunternehmen.',                difficulty: 'leicht' },
      karlin:   { name: 'Karlín',                   desc: 'Prags am schnellsten wachsendes Viertel. Street-Art, Start-up-Atmosphäre und Rätsel, die von moderner Architektur inspiriert sind. Eine erfrischende Alternative zur reinen Stadtgeschichte.', difficulty: 'mittel' },
      movie:    { name: 'Prager Filmschauplätze',   desc: 'Erkunden Sie die Drehorte von Amadeus, Mission: Impossible und Knives Out. Eine einzigartig cineastische Route, die gleichzeitig als perfekter Gesprächsstarter dient.',    difficulty: 'mittel' },
      difficulty: {
        easy:   'leicht',
        medium: 'mittel',
        hard:   'schwer',
      },
    },
    how: {
      title: 'So funktioniert es',
      step1: { title: 'Anfrage & individuelle Gestaltung',    desc: 'Füllen Sie das Formular aus. Wir rufen Sie innerhalb von 24 Stunden an, gehen gemeinsam alle Details durch und passen das Spiel exakt auf Ihr Team zu — Gruppengröße, Sprache, Schwierigkeitsgrad, Unternehmenswerte.' },
      step2: { title: 'Spieltag: Briefing & Spiel',          desc: 'Sie treffen Ihren Spielleiter am vereinbarten Ort. Sie erhalten die App und alle Anweisungen. Ab diesem Moment übernimmt Ihr Team das Steuer — und Prag die Regie.' },
      step3: { title: 'Zieleinlauf & Siegerehrung',          desc: 'Der letzte Hinweis führt zur feierlichen Zielüberquerung, einem Gruppenportrait und einem digitalen Teilnahmezertifikat für jeden Teilnehmer. Ein Moment, den wirklich alle teilen möchten.' },
    },
    gallery: {
      title:   'Das Erlebnis in Bildern',
      caption: 'Hunderte von Firmenteams. Tausende gemeinsamer Momente.',
    },
    package: {
      title:    'Alles inklusive — keine versteckten Kosten',
      subtitle: 'Ein transparenter Preis. Keine Zusatzgebühren. Keine unangenehmen Überraschungen auf der Rechnung.',
      cta:      'Preis anfragen',
      feature1:  'App-Zugang für alle Teammitglieder',
      feature2:  'Professioneller Spielleiter für die gesamte Veranstaltungsdauer',
      feature3:  'Gedruckte oder digitale Rätselmaterialien',
      feature4:  'Live-Rangliste und Echtzeit-Teamverfolgung',
      feature5:  'Professionelle Fotodokumentation der Veranstaltung',
      feature6:  'Digitale Teilnahmezertifikate für alle Teilnehmer',
      feature7:  'Auswahl aus 5 Routen mit einstellbarem Schwierigkeitsgrad',
      feature8:  'Vollständige Unterstützung auf Tschechisch, Englisch, Deutsch und Spanisch',
      feature9:  'Individuelle Gestaltung nach Unternehmenswerten oder Corporate Design',
      feature10: 'Haftpflichtversicherung und Notfallplan',
    },
    reviews: {
      title:     'Was andere HR-Manager sagen',
      aggregate: '★★★★★ 4,9 — Durchschnitt aus 127 verifizierten Bewertungen',
      source: {
        google:      'Google',
        facebook:    'Facebook',
        tripadvisor: 'TripAdvisor',
      },
    },
    blog: {
      title:    'Tipps & Inspiration',
      subtitle: 'Praktische Ratschläge für Firmenveranstaltungen in Prag',
      readmore: 'Weiterlesen',
      minread:  'Min. Lesezeit',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      1: {
        q: 'Für wie viele Personen ist das Spiel geeignet?',
        a: 'Das Spiel ist für Gruppen von 9 bis 300 Teilnehmern konzipiert. Kleinere Gruppen spielen als eine Einheit; größere Gruppen werden automatisch in Wettkampfteams von 4–6 Personen aufgeteilt. Das Optimum liegt bei 20–60 Teilnehmern.',
      },
      2: {
        q: 'Wie lange dauert die Veranstaltung?',
        a: 'Das aktive Spiel dauert 2,5 bis 3,5 Stunden. Hinzu kommen 15 Minuten für das Eröffnungs-Briefing und 30 Minuten für die Abschlussveranstaltung. Planen Sie insgesamt einen halben Tag ein.',
      },
      3: {
        q: 'Wir haben internationale Kollegen, die kein Tschechisch sprechen. Ist das ein Problem?',
        a: 'Kein Problem. Das gesamte Spiel läuft auf Tschechisch, Englisch, Deutsch und Spanisch — auch in beliebiger Kombination. Die App und alle gedruckten Materialien sind vollständig lokalisiert.',
      },
      4: {
        q: 'Was passiert bei schlechtem Wetter?',
        a: 'Alle Routen sind wetterunabhängig. Ihr Spielleiter verfügt immer über einen Ausweichplan für Innenräume. Bei extremen Witterungsbedingungen verschieben wir die Veranstaltung kostenfrei auf einen Ersatztermin.',
      },
      5: {
        q: 'Kann das Spiel auf unser Unternehmensthema zugeschnitten werden?',
        a: 'Ja — und das gehört zu unseren beliebtesten Optionen. Wir können Ihre Unternehmenswerte, Produkte, interne Unternehmenskultur oder Ihren Markennamen direkt in die Rätsel einarbeiten. Erwähnen Sie es einfach in Ihrer Anfrage.',
      },
      6: {
        q: 'Benötigt jeder Teilnehmer ein Smartphone?',
        a: 'Die App läuft auf iOS und Android. Ein Telefon pro Team genügt grundsätzlich, wir empfehlen jedoch eines pro zwei Personen. Mobilfunkdaten reichen aus — WLAN ist nicht erforderlich.',
      },
      7: {
        q: 'Wie läuft die Zahlung ab und was ist im Preis enthalten?',
        a: 'Der Preis wird individuell nach Gruppengröße, Route und Anpassungsgrad kalkuliert. Wir stellen eine Rechnung mit 14-tägigem Zahlungsziel aus. Alles, was im Abschnitt „Leistungen" aufgeführt ist, ist enthalten — es gibt keine zusätzlichen Gebühren.',
      },
      8: {
        q: 'Wie weit im Voraus sollten wir buchen?',
        a: 'In der Hochsaison (April–Oktober) empfehlen wir eine Buchung mindestens 3 Wochen im Voraus. Beliebte Termine (Freitage, Gruppen über 50 Personen) sind noch früher ausgebucht. Außerhalb der Hauptsaison sind wir flexibler.',
      },
      9: {
        q: 'Haben Sie Erfahrung mit großen Unternehmenskunden?',
        a: 'In acht Jahren haben wir Veranstaltungen für Škoda Auto, Avast, McKinsey, Deloitte, Česká spořitelna und Dutzende weiterer Unternehmen organisiert. Referenzen stellen wir gerne auf Anfrage zur Verfügung.',
      },
    },
    contact: {
      title:    'Unverbindliches Angebot anfordern',
      subtitle: 'Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.',
      name:          'Vor- und Nachname',
      company:       'Firmenname',
      email:         'Geschäftliche E-Mail',
      phone:         'Telefonnummer',
      teamsize:      'Anzahl der Teilnehmer',
      teamsizePlaceholder: 'mind. 9',
      language:      'Spielsprache',
      location:      'Bevorzugte Route',
      date:          'Wunschdatum',
      time:          'Wunschuhrzeit',
      flexible:      'Datum noch offen — bitte teilen Sie uns Ihre Verfügbarkeit mit',
      requirements:  'Besondere Anforderungen oder Wünsche',
      referral:      'Wie sind Sie auf uns aufmerksam geworden?',
      submit:        'Anfrage senden',
      success:       'Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden.',
      langOptions: {
        cs: 'Tschechisch',
        en: 'Englisch',
        de: 'Deutsch',
        es: 'Spanisch',
        fr: 'Französisch',
        pl: 'Polnisch',
        it: 'Italienisch',
      },
      locationOptions: {
        oldtown:  'Altstadt',
        hradcany: 'Hradschin',
        vysehrad: 'Vyšehrad',
        karlin:   'Karlín',
        movie:    'Prager Filmschauplätze',
        unsure:   'Helfen Sie mir bei der Auswahl',
      },
    },
    footer: {
      tagline:   'Firmen-Teambuilding in Prag, das in Erinnerung bleibt.',
      copyright: '© 2026 TreasureHuntPrague.cz — Alle Rechte vorbehalten',
      privacy:   'Datenschutzerklärung',
      terms:     'Allgemeine Geschäftsbedingungen',
    },
  },

  // ---------------------------------------------------------------------------
  // SPANISH
  // ---------------------------------------------------------------------------
  es: {
    nav: {
      home:      'Inicio',
      why:       'Por qué nosotros',
      locations: 'Rutas',
      how:       'Cómo funciona',
      gallery:   'Galería',
      package:   'Paquete',
      reviews:   'Opiniones',
      faq:       'Preguntas',
      contact:   'Contacto',
      cta:       'Solicitar presupuesto',
    },
    hero: {
      badge:       'Team building corporativo en Praga',
      headline:    'El team building del que todo el mundo hablará meses después.',
      subheadline: 'Sin presentaciones aburridas. Sin dinámicas incómodas. Solo tu equipo descubriendo los secretos de una de las ciudades más hermosas de Europa — y disfrutándolo de verdad.',
      cta:         'Solicitar presupuesto',
    },
    problem: {
      text:     '"¿Otro día de team building?" — Nadie debería tener que pensarlo.',
      solution: 'Por eso creamos esto.',
    },
    why: {
      title: 'Seis razones por las que funciona',
      1: { title: 'Cero preparación de tu parte',               desc: 'Nos encargamos de absolutamente todo. Tú llegas — nosotros nos ocupamos del resto. Tu única tarea es disfrutar el día.' },
      2: { title: 'Diseñado para grupos de 9 a 300 personas',   desc: 'El juego se adapta dinámicamente al tamaño del grupo. Los equipos pequeños compiten cara a cara; los grupos grandes se dividen de forma natural en equipos rivales.' },
      3: { title: 'Toda Praga como campo de juego',             desc: 'Cinco rutas icónicas: el casco histórico, el majestuoso Hradčany, el vibrante Karlín o los escenarios cinematográficos de Praga — elige el ambiente que mejor encaje con la cultura de tu empresa.' },
      4: { title: 'Cuatro idiomas, una experiencia sin fronteras', desc: 'El juego funciona a la perfección en checo, inglés, alemán y español. Ideal para equipos internacionales y empresas con trabajadores expatriados.' },
      5: { title: 'Marcador en vivo para una competición real',  desc: 'Un tablero de resultados en tiempo real mantiene la energía y las risas al máximo durante toda la jornada. La rivalidad sana es el ingrediente secreto de los mejores eventos de equipo.' },
      6: { title: 'Satisfacción garantizada',                    desc: 'Si tu equipo no queda encantado, te devolvemos el dinero sin preguntas. En ocho años de actividad, hemos tenido que aplicar esta garantía dos veces.' },
    },
    locations: {
      title:    'Cinco rutas por Praga',
      subtitle: 'Cada ruta cuenta una historia diferente. Elige la que mejor conecta con la personalidad de tu empresa.',
      oldtown:  { name: 'Ciudad Vieja',                  desc: 'Callejuelas góticas, patios barrocos y cifras escondidas en fachadas de piedra. Nuestra ruta más popular — con una sorpresa esperándote en cada esquina.',                   difficulty: 'media' },
      hradcany: { name: 'Hradčany y Malá Strana',        desc: 'El barrio real, empinados adoquines y vistas panorámicas de toda la ciudad. La ruta más impresionante visualmente — cada foto del equipo merece un marco.',               difficulty: 'difícil' },
      vysehrad: { name: 'Vyšehrad',                      desc: 'Una fortaleza envuelta en leyendas sobre el Vltava. Ritmo algo más tranquilo, más espacio para conversar — muy popular entre empresas creativas y tecnológicas.',               difficulty: 'fácil' },
      karlin:   { name: 'Karlín',                        desc: 'El barrio que crece más rápido en Praga. Arte urbano, energía startup y cifras inspiradas en la arquitectura moderna. Una alternativa refrescante a la historia pura.',          difficulty: 'media' },
      movie:    { name: 'Localizaciones de cine en Praga', desc: 'Recorre los escenarios de Amadeus, Misión: Imposible y Puñales por la espalda. Una ruta cinematográfica única que también funciona como el mejor rompehielos del mundo.', difficulty: 'media' },
      difficulty: {
        easy:   'fácil',
        medium: 'media',
        hard:   'difícil',
      },
    },
    how: {
      title: 'Cómo funciona',
      step1: { title: 'Consulta y personalización',       desc: 'Rellenas el formulario. Te llamamos en 24 horas, repasamos todos los detalles y adaptamos el juego exactamente a tu equipo: tamaño, idioma, dificultad, valores de empresa.' },
      step2: { title: 'El gran día: instrucciones y juego', desc: 'Te encuentras con tu guía en el punto de inicio acordado. Recibes la app y las instrucciones. A partir de ahí, tu equipo toma el mando — y Praga hace el resto.' },
      step3: { title: 'Meta, celebración y recuerdos',    desc: 'La última pista lleva a una llegada a meta celebrada en grupo, una foto conjunta y un certificado digital para cada participante. Un momento que todos querrán compartir.' },
    },
    gallery: {
      title:   'Míralo en acción',
      caption: 'Cientos de equipos corporativos. Miles de momentos compartidos.',
    },
    package: {
      title:    'Todo incluido, nada oculto',
      subtitle: 'Un precio claro. Sin cargos adicionales. Sin sorpresas en la factura.',
      cta:      'Ver precios',
      feature1:  'Acceso a la app para todos los miembros del equipo',
      feature2:  'Guía profesional durante toda la actividad',
      feature3:  'Materiales y cifras en formato impreso o digital',
      feature4:  'Marcador en vivo y seguimiento en tiempo real de los equipos',
      feature5:  'Documentación fotográfica profesional del evento',
      feature6:  'Certificados digitales de participación para todos',
      feature7:  'Elección entre 5 rutas y dificultad ajustable',
      feature8:  'Soporte completo en checo, inglés, alemán y español',
      feature9:  'Personalización según los valores o imagen corporativa',
      feature10: 'Seguro de responsabilidad civil y plan de contingencia',
    },
    reviews: {
      title:     'Lo que dicen otros responsables de RRHH',
      aggregate: '★★★★★ 4,9 — media de 127 opiniones verificadas',
      source: {
        google:      'Google',
        facebook:    'Facebook',
        tripadvisor: 'TripAdvisor',
      },
    },
    blog: {
      title:    'Consejos e inspiración',
      subtitle: 'Guías prácticas para eventos corporativos en Praga',
      readmore: 'Leer más',
      minread:  'min de lectura',
    },
    faq: {
      title: 'Preguntas frecuentes',
      1: {
        q: '¿Para cuántas personas está pensado el juego?',
        a: 'El juego está diseñado para grupos de 9 a 300 participantes. Los grupos pequeños juegan como un solo equipo; los grupos más grandes se dividen automáticamente en equipos competidores de 4 a 6 personas. El número óptimo es entre 20 y 60 participantes.',
      },
      2: {
        q: '¿Cuánto dura la actividad?',
        a: 'El juego activo dura entre 2,5 y 3,5 horas. Añade 15 minutos para el briefing inicial y 30 minutos para la ceremonia de cierre. Planifica aproximadamente medio día en total.',
      },
      3: {
        q: 'Tenemos compañeros internacionales que no hablan checo. ¿Es un problema?',
        a: 'En absoluto. El juego completo está disponible en checo, inglés, alemán y español — o en cualquier combinación. La app y todos los materiales impresos están totalmente localizados.',
      },
      4: {
        q: '¿Qué pasa si llueve?',
        a: 'Todas las rutas funcionan con cualquier clima. Tu guía siempre tiene un plan alternativo para trasladarse a espacios cubiertos. En caso de condiciones extremas, reprogramamos el evento sin coste adicional.',
      },
      5: {
        q: '¿Se puede personalizar el juego con el tema de nuestra empresa?',
        a: 'Sí — y es una de nuestras opciones más solicitadas. Podemos integrar los valores, los productos, la cultura interna o el nombre de vuestra marca directamente en las cifras. Solo menciónalo en tu consulta.',
      },
      6: {
        q: '¿Todo el mundo necesita un smartphone?',
        a: 'La app funciona en iOS y Android. Con un teléfono por equipo es suficiente, aunque recomendamos uno por cada dos personas. Con datos móviles es suficiente — no se necesita WiFi.',
      },
      7: {
        q: '¿Cómo funciona el pago y qué incluye el precio?',
        a: 'El precio se calcula de forma individual según el tamaño del grupo, la ruta y el nivel de personalización. Emitimos una factura con 14 días de plazo de pago. Todo lo que aparece en la sección Paquete está incluido — sin cargos adicionales.',
      },
      8: {
        q: '¿Con cuánta antelación hay que reservar?',
        a: 'En temporada alta (abril–octubre) recomendamos reservar con al menos 3 semanas de antelación. Los momentos más solicitados (viernes, grupos de más de 50 personas) se llenan antes. Fuera de temporada somos más flexibles.',
      },
      9: {
        q: '¿Tienen experiencia con grandes empresas corporativas?',
        a: 'En ocho años hemos organizado eventos para Škoda Auto, Avast, McKinsey, Deloitte, Česká spořitelna y decenas de otras empresas. Facilitamos referencias con mucho gusto si se solicitan.',
      },
    },
    contact: {
      title:    'Solicita un presupuesto sin compromiso',
      subtitle: 'Rellena el formulario y te responderemos en 24 horas con una propuesta a medida.',
      name:          'Nombre y apellidos',
      company:       'Nombre de la empresa',
      email:         'Email corporativo',
      phone:         'Número de teléfono',
      teamsize:      'Número de participantes',
      teamsizePlaceholder: 'mín. 9',
      language:      'Idioma del juego',
      location:      'Ruta preferida',
      date:          'Fecha preferida',
      time:          'Hora preferida',
      flexible:      'Fecha aún por decidir — dinos tu disponibilidad',
      requirements:  'Requisitos especiales o peticiones',
      referral:      '¿Cómo nos has conocido?',
      submit:        'Enviar consulta',
      success:       '¡Gracias! Tu consulta ha sido recibida. Nos pondremos en contacto contigo en 24 horas.',
      langOptions: {
        cs: 'Checo',
        en: 'Inglés',
        de: 'Alemán',
        es: 'Español',
        fr: 'Francés',
        pl: 'Polaco',
        it: 'Italiano',
      },
      locationOptions: {
        oldtown:  'Ciudad Vieja',
        hradcany: 'Hradčany',
        vysehrad: 'Vyšehrad',
        karlin:   'Karlín',
        movie:    'Localizaciones de cine',
        unsure:   'Ayúdame a elegir',
      },
    },
    footer: {
      tagline:   'Team building corporativo en Praga que nadie olvida.',
      copyright: '© 2026 TreasureHuntPrague.cz — Todos los derechos reservados',
      privacy:   'Política de privacidad',
      terms:     'Términos y condiciones',
    },
  },
};

// =============================================================================
// i18n: APPLY TRANSLATIONS TO DOM
// =============================================================================

/**
 * Walks all [data-i18n] elements and swaps their content/placeholder/attribute
 * to the requested language. Also updates <html lang> and active lang button.
 *
 * @param {string} lang  One of 'cs' | 'en' | 'de' | 'es'
 */
function applyTranslations(lang) {
  const t = translations[lang] || translations.cs;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    // Traverse nested key e.g. "hero.headline"
    const val = key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), t);

    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.dataset.i18nAttr) {
        el.setAttribute(el.dataset.i18nAttr, val);
      } else {
        el.innerHTML = val;
      }
    }
  });

  document.documentElement.lang = lang;

  // Highlight active lang button
  document.querySelectorAll('.nav__lang-btn, .nav-mobile__lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

// =============================================================================
// MAIN INIT
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------------------------
  // 1. LANGUAGE DETECTION & SWITCHING
  // ---------------------------------------------------------------------------

  const SUPPORTED_LANGS = ['cs', 'en', 'de', 'es'];
  const LS_KEY = 'preferred-lang';

  /**
   * Determine the active language from, in priority order:
   *  1. URL path prefix  (/en/, /de/, /es/ → that lang; / → cs)
   *  2. localStorage
   *  3. navigator.language
   *  4. Fallback: cs
   */
  function detectLang() {
    // 1. URL path
    const pathMatch = window.location.pathname.match(/(?:^|\/)(?:treasurehunt\/)?(en|de|es)(\/|$)/);
    if (pathMatch) return pathMatch[1];
    // Root path (no lang prefix) maps to Czech
    if (/^\/(cs)?(\/|$)|\/treasurehunt\/(cs)?(\/|$)/.test(window.location.pathname)) {
      // Only treat it as "cs" if there's no recognisable lang prefix
      const hasOtherPrefix = SUPPORTED_LANGS.filter(l => l !== 'cs').some(
        l => window.location.pathname.includes('/' + l + '/')
      );
      if (!hasOtherPrefix) return 'cs';
    }

    // 2. localStorage
    const stored = localStorage.getItem(LS_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

    // 3. Browser language
    const browserLang = (navigator.language || '').toLowerCase().slice(0, 2);
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

    // 4. Fallback
    return 'cs';
  }

  /**
   * Switch the active language: update DOM, URL, localStorage, html[data-lang].
   */
  function switchLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;

    // Update html[data-lang] — CSS can key off this for any lang-specific styles
    document.documentElement.setAttribute('data-lang', lang);

    // Apply translation strings
    applyTranslations(lang);

    // Persist preference
    localStorage.setItem(LS_KEY, lang);

    // Update URL via pushState (no reload)
    const currentPath = window.location.pathname;
    let newPath;

    if (lang === 'cs') {
      // Strip any lang prefix → root
      newPath = currentPath.replace(/^\/(en|de|es)(\/|$)/, '/');
    } else {
      // Remove any existing lang prefix, then prepend the new one
      const stripped = currentPath.replace(/^\/(en|de|es|cs)(\/|$)/, '/');
      newPath = '/' + lang + stripped;
    }

    // Normalise double slashes
    newPath = newPath.replace(/\/\//g, '/');
    if (newPath !== currentPath) {
      history.pushState({ lang }, '', newPath);
    }
  }

  // Bind lang switcher buttons
  document.querySelectorAll('.nav__lang-btn[data-lang], .nav-mobile__lang-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // Handle browser back/forward
  window.addEventListener('popstate', e => {
    switchLang(detectLang());
  });

  // Bootstrap: detect and apply on first load
  const initialLang = detectLang();
  document.documentElement.setAttribute('data-lang', initialLang);
  applyTranslations(initialLang);

  // ---------------------------------------------------------------------------
  // 2. HAMBURGER MENU
  // ---------------------------------------------------------------------------

  const hamburgerBtn  = document.querySelector('.nav__hamburger');
  const navOverlay    = document.querySelector('.nav-mobile');
  const overlayClose  = document.querySelector('.nav-mobile__close');

  function openMenu() {
    if (!navOverlay) return;
    navOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    navOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    if (!navOverlay) return;
    navOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    navOverlay.setAttribute('aria-hidden', 'true');
  }

  if (hamburgerBtn) {
    // Initial ARIA state
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (navOverlay && hamburgerBtn.id) {
      hamburgerBtn.setAttribute('aria-controls', navOverlay.id || 'nav-overlay');
    }
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navOverlay && navOverlay.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  if (overlayClose) {
    overlayClose.addEventListener('click', closeMenu);
  }

  // Close on click outside overlay panel (i.e. on the dimmed backdrop)
  if (navOverlay) {
    navOverlay.addEventListener('click', e => {
      // Only close if clicking the overlay background, not its inner panel
      if (e.target === navOverlay) closeMenu();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close menu when any nav link inside the overlay is clicked
  if (navOverlay) {
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ---------------------------------------------------------------------------
  // 3. SCROLL ANIMATIONS (IntersectionObserver)
  // ---------------------------------------------------------------------------

  // Stagger: assign --delay CSS custom properties to children of [data-animate-stagger]
  document.querySelectorAll('[data-animate-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((child, index) => {
      child.style.setProperty('--delay', index * 100 + 'ms');
      // Also mark each child for observation
      child.setAttribute('data-animate', '');
    });
  });

  const animateObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // once: true
      }
    });
  }, {
    threshold:  0.05,
    rootMargin: '0px 0px -20px 0px',
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    animateObserver.observe(el);
  });

  // Also observe .fade-up elements (used on blog index cards)
  document.querySelectorAll('.fade-up:not([data-animate])').forEach(el => {
    animateObserver.observe(el);
  });

  // Fallback: after 2s reveal any elements that IntersectionObserver missed
  setTimeout(() => {
    document.querySelectorAll('[data-animate]:not(.in-view), .fade-up:not(.in-view)').forEach(el => {
      el.classList.add('in-view');
    });
  }, 2000);

  // ---------------------------------------------------------------------------
  // 4. STICKY CTA VISIBILITY
  // ---------------------------------------------------------------------------

  const stickyCta     = document.querySelector('.sticky-cta');
  const contactSection = document.getElementById('contact');

  if (stickyCta && contactSection) {
    const ctaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Hide sticky CTA when the contact section is in view
        stickyCta.classList.toggle('hidden', entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    ctaObserver.observe(contactSection);
  }

  // ---------------------------------------------------------------------------
  // 5. FAQ ACCORDION
  // ---------------------------------------------------------------------------

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    // Set initial ARIA state
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Close all FAQ items
      faqItems.forEach(other => {
        const otherAnswer   = other.querySelector('.faq-answer');
        const otherQuestion = other.querySelector('.faq-question');
        if (other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          if (otherAnswer)   otherAnswer.style.maxHeight = '0';
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
        }
      });

      // Open clicked item if it was closed
      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 6. CONTACT FORM
  // ---------------------------------------------------------------------------

  // --- 6a. Team size +/− buttons ---
  const teamSizeInput = document.getElementById('team-size');
  const qtyMinus      = document.querySelector('.qty-minus');
  const qtyPlus       = document.querySelector('.qty-plus');

  if (teamSizeInput) {
    const MIN_TEAM = parseInt(teamSizeInput.min, 10) || 9;
    const MAX_TEAM = parseInt(teamSizeInput.max, 10) || 300;

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        const current = parseInt(teamSizeInput.value, 10) || MIN_TEAM;
        teamSizeInput.value = Math.max(MIN_TEAM, current - 1);
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        const current = parseInt(teamSizeInput.value, 10) || MIN_TEAM;
        teamSizeInput.value = Math.min(MAX_TEAM, current + 1);
      });
    }
  }

  // --- 6b. Flexible date checkbox ---
  const flexibleCheckbox = document.getElementById('flexible-date');
  const dateInput        = document.getElementById('event-date');
  const timeInput        = document.getElementById('event-time');

  function toggleFlexible() {
    if (!flexibleCheckbox) return;
    const isFlexible = flexibleCheckbox.checked;
    [dateInput, timeInput].forEach(input => {
      if (!input) return;
      input.disabled = isFlexible;
      input.classList.toggle('is-disabled', isFlexible);
    });
  }

  if (flexibleCheckbox) {
    flexibleCheckbox.addEventListener('change', toggleFlexible);
    toggleFlexible(); // apply on load in case it is pre-checked
  }

  // --- 6c. Country code prefix selector ---
  const phonePrefix  = document.getElementById('phone-prefix');
  const phonePrefixes = [
    { code: '+420', label: '+420 CZ' },
    { code: '+1',   label: '+1 US'   },
    { code: '+44',  label: '+44 UK'  },
    { code: '+49',  label: '+49 DE'  },
    { code: '+43',  label: '+43 AT'  },
    { code: '+41',  label: '+41 CH'  },
    { code: '+48',  label: '+48 PL'  },
    { code: '+36',  label: '+36 HU'  },
    { code: '+33',  label: '+33 FR'  },
    { code: '+34',  label: '+34 ES'  },
  ];

  if (phonePrefix) {
    phonePrefixes.forEach(({ code, label }) => {
      const opt = document.createElement('option');
      opt.value       = code;
      opt.textContent = label;
      if (code === '+420') opt.selected = true;
      phonePrefix.appendChild(opt);
    });
  }

  // --- 6d. Form submission ---
  const contactForm    = document.getElementById('contact-form');
  const formSuccess    = document.querySelector('.form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      // Native HTML5 validation first
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = '…';
      }

      // Simulate async submission (replace with real fetch when backend is ready)
      const formData = new FormData(contactForm);
      const payload  = Object.fromEntries(formData.entries());

      // -----------------------------------------------------------------------
      // Real implementation: replace the setTimeout below with:
      //
      // fetch('/api/enquiry', {
      //   method:  'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body:    JSON.stringify(payload),
      // })
      // .then(r => r.ok ? handleSuccess() : handleError())
      // .catch(handleError);
      // -----------------------------------------------------------------------

      setTimeout(() => {
        handleSuccess();
      }, 900);

      function handleSuccess() {
        contactForm.reset();
        toggleFlexible();

        if (submitBtn) {
          submitBtn.disabled     = false;
          submitBtn.textContent  = submitBtn.dataset.originalText || 'Send';
        }

        if (formSuccess) {
          formSuccess.classList.remove('hidden');
          formSuccess.classList.add('is-visible');
          // Scroll success message into view
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }

      function handleError() {
        if (submitBtn) {
          submitBtn.disabled    = false;
          submitBtn.textContent = submitBtn.dataset.originalText || 'Send';
        }
        // Could surface an error message here
        console.error('Form submission failed');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 7 & 8. CAROUSEL (Locations + Reviews — shared logic)
  // ---------------------------------------------------------------------------

  /**
   * Initialise a scroll-snap carousel with dot navigation.
   *
   * @param {string} carouselSelector  CSS selector for the scroll container
   * @param {string} dotsSelector      CSS selector for the dots wrapper
   */
  function initCarousel(carouselSelector, dotsSelector) {
    const carousel = document.querySelector(carouselSelector);
    const dotsWrap = document.querySelector(dotsSelector);
    if (!carousel || !dotsWrap) return;

    const cards = Array.from(carousel.children);
    if (cards.length === 0) return;

    // Build dot elements
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className    = 'carousel-dot';
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === 0) dot.classList.add('is-active');

      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });

      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    // Update active dot — use IntersectionObserver for precision
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = cards.indexOf(entry.target);
          if (idx === -1) return;
          dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        }
      });
    }, {
      root:       carousel,
      threshold:  0.6, // card must be 60% visible to activate its dot
    });

    cards.forEach(card => cardObserver.observe(card));
  }

  initCarousel('.locations-carousel', '.locations-carousel + .carousel-dots, .carousel-dots[data-for="locations"]');
  initCarousel('.reviews-carousel',   '.reviews-carousel + .carousel-dots, .carousel-dots[data-for="reviews"]');

  // Fallback: also handle the common pattern where dots are a sibling
  // (handles both selector variants above — no-op if already initialised)
  (function initCarouselsFallback() {
    [
      { wrap: '.locations-wrap', carousel: '.locations-carousel', dots: '.carousel-dots' },
      { wrap: '.reviews-wrap',   carousel: '.reviews-carousel',   dots: '.carousel-dots' },
    ].forEach(({ wrap, carousel, dots }) => {
      const wrapEl = document.querySelector(wrap);
      if (!wrapEl) return;
      const carouselEl = wrapEl.querySelector(carousel);
      const dotsEl     = wrapEl.querySelector(dots);
      if (!carouselEl || !dotsEl || dotsEl.children.length > 0) return; // already populated

      const cards = Array.from(carouselEl.children);
      cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className  = 'carousel-dot';
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', () => {
          cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        });
        dotsEl.appendChild(dot);
      });

      const dotBtns = Array.from(dotsEl.querySelectorAll('.carousel-dot'));
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target);
            if (idx !== -1) dotBtns.forEach((d, i) => d.classList.toggle('is-active', i === idx));
          }
        });
      }, { root: carouselEl, threshold: 0.6 });

      cards.forEach(c => obs.observe(c));
    });
  })();

  // ---------------------------------------------------------------------------
  // 9. SMOOTH SCROLL
  // ---------------------------------------------------------------------------

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ---------------------------------------------------------------------------
  // 10. NAV SCROLL EFFECT
  // ---------------------------------------------------------------------------

  const nav = document.querySelector(".nav");

  if (nav) {
    const SCROLL_THRESHOLD = 20;

    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run once on load in case page is already scrolled
  }


  // ---------------------------------------------------------------------------
  // 11. LANGUAGE DROPDOWN
  // ---------------------------------------------------------------------------

  const langDropdowns = document.querySelectorAll('.nav__lang-dropdown');

  langDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.nav__lang-current');
    if (!btn) return;

    function openDropdown() {
      dropdown.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      dropdown.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.contains('is-open') ? closeDropdown() : openDropdown();
    });

    // Close when clicking outside
    document.addEventListener('click', () => closeDropdown());

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDropdown();
    });
  });

}); // end DOMContentLoaded