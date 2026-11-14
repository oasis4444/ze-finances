// Z&E — traductions (français → anglais / malagasy)
// Le texte source de l'application est en français ; ce fichier le traduit à l'affichage.
(function () {
  // [français, english, malagasy]
  const D = [
    // Navigation & titres
    ['Tableau de bord', 'Dashboard', 'Tabilao fitantanana'],
    ['Accueil', 'Home', 'Fandraisana'],
    ['Revenus', 'Income', 'Fidiram-bola'],
    ['Dépenses', 'Expenses', 'Fandaniana'],
    ['Épargne', 'Savings', 'Tahiry'],
    ['Nos projets', 'Our projects', 'Ny tetikasanay'],
    ['Projets', 'Projects', 'Tetikasa'],
    ['Budget', 'Budget', 'Tetibola'],
    ['Paramètres', 'Settings', 'Fikirana'],
    ['Réglages', 'Settings', 'Fikirana'],
    ['Notre avenir, notre projet', 'Our future, our project', 'Ny ho avinay, ny tetikasanay'],
    ['« Ensemble, nous gérons aujourd\'hui pour construire demain. »', '“Together, we manage today to build tomorrow.”', '« Miaraka, mitantana anio izahay mba hanorina ny rahampitso. »'],
    ['Synchronisé en ligne', 'Synced online', 'Mifandray an-tserasera'],
    ['Enregistré sur cet appareil', 'Saved on this device', 'Voatahiry amin\'ity fitaovana ity'],
    ['Hors ligne — synchronisation au retour du réseau', 'Offline — will sync when back online', 'Tsy misy tambajotra — hifandray rehefa miverina ny réseau'],
    ['Installer', 'Install', 'Hametraka'],
    ['Installer l\'application', 'Install the app', 'Hametraka ny app'],
    ['Installer l\'application sur cet appareil', 'Install the app on this device', 'Hametraka ny app amin\'ity fitaovana ity'],
    ['Installer l\'application / raccourci bureau', 'Install the app / desktop shortcut', 'Hametraka ny app / raccourci eo amin\'ny bureau'],
    ['Clair / sombre', 'Light / dark', 'Mazava / maizina'],
    ['Couleurs & paramètres', 'Colours & settings', 'Loko sy fikirana'],
    ['Mois précédent', 'Previous month', 'Volana teo aloha'],
    ['Mois suivant', 'Next month', 'Volana manaraka'],
    ['Qui utilise l\'application ?', 'Who is using the app?', 'Iza no mampiasa ny app?'],
    ['Menu', 'Menu', 'Menu'],

    // Tableau de bord
    ['Revenus du couple', 'Couple\'s income', 'Fidiram-bolan\'ny mpivady'],
    ['Solde disponible', 'Available balance', 'Vola sisa azo ampiasaina'],
    ['Revenus − dépenses − épargne', 'Income − expenses − savings', 'Fidiram-bola − fandaniana − tahiry'],
    ['Aucun budget défini', 'No budget set', 'Tsy mbola misy tetibola'],
    ['Nouveau projet', 'New project', 'Tetikasa vaovao'],
    ['Revenus, dépenses et épargne', 'Income, expenses and savings', 'Fidiram-bola, fandaniana ary tahiry'],
    ['Revenus, dépenses et épargne par mois', 'Income, expenses and savings by month', 'Fidiram-bola, fandaniana ary tahiry isam-bolana'],
    ['Le point du mois', 'This month at a glance', 'Ny tatitry ny volana'],
    ['Combien avons-nous gagné ?', 'How much did we earn?', 'Firy no azonay?'],
    ['Combien avons-nous dépensé ?', 'How much did we spend?', 'Firy no lanianay?'],
    ['Combien avons-nous économisé ?', 'How much did we save?', 'Firy no voatahirinay?'],
    ['Sommes-nous sur la bonne voie ?', 'Are we on track?', 'Mandeha tsara ve izahay?'],
    ['Que devons-nous améliorer ?', 'What should we improve?', 'Inona no tokony hohatsarainay?'],
    ['Oui ✓', 'Yes ✓', 'Eny ✓'],
    ['Pas encore', 'Not yet', 'Mbola tsy'],
    ['À lancer', 'To start', 'Hatombozina'],
    ['Atteint 🎉', 'Reached 🎉', 'Tratra 🎉'],
    ['Atteint', 'Reached', 'Tratra'],
    ['Créez votre premier projet pour suivre votre progression.', 'Create your first project to track your progress.', 'Mamorona ny tetikasanareo voalohany hanarahana ny fandrosoana.'],
    ['Continuez ainsi : enregistrez chaque dépense pour garder une vision claire.', 'Keep it up: record every expense to keep a clear view.', 'Tohizo: soraty ny fandaniana rehetra mba hahitana mazava ny zava-misy.'],
    ['Dépenses par catégorie', 'Expenses by category', 'Fandaniana isaky ny sokajy'],
    ['Alertes & conseils', 'Alerts & advice', 'Fampitandremana sy torohevitra'],
    ['Alertes', 'Alerts', 'Fampitandremana'],
    ['Tout est sous contrôle ce mois-ci. Aucun budget dépassé.', 'Everything is under control this month. No budget exceeded.', 'Voafehy tsara ny zava-drehetra amin\'ity volana ity. Tsy misy tetibola mihoatra.'],
    ['Aucun dépassement ce mois-ci.', 'No overspending this month.', 'Tsy misy mihoatra amin\'ity volana ity.'],
    ['Bienvenue dans Z&E !', 'Welcome to Z&E!', 'Tongasoa eto amin\'ny Z&E!'],
    ['Commencez par ajouter un revenu, une dépense ou votre premier projet (terrain, maison…).', 'Start by adding income, an expense or your first project (land, house…).', 'Atombohy amin\'ny fampidirana fidiram-bola, fandaniana na ny tetikasanareo voalohany (tany, trano…).'],
    ['Revenu', 'Income', 'Fidiram-bola'],
    ['Dépense', 'Expense', 'Fandaniana'],
    ['Projet', 'Project', 'Tetikasa'],
    ['Voir un exemple', 'See an example', 'Hijery ohatra'],
    ['Aucun projet pour l’instant', 'No projects yet', 'Tsy mbola misy tetikasa'],
    ['Ajoutez « Achat du terrain » et « Construction de la maison » pour suivre votre progression.', 'Add “Buying the land” and “Building the house” to track your progress.', 'Ampio ny « Fividianana tany » sy « Fananganana trano » hanarahana ny fandrosoana.'],
    ['Pas encore de données', 'No data yet', 'Mbola tsy misy angona'],
    ['Le graphique apparaîtra dès vos premières opérations.', 'The chart will appear with your first transactions.', 'Hiseho ny sary rehefa misy ny asa voalohany.'],
    ['Aucune dépense ce mois-ci', 'No expenses this month', 'Tsy misy fandaniana amin\'ity volana ity'],
    ['Les dépenses apparaîtront ici par catégorie.', 'Expenses will appear here by category.', 'Hiseho eto isaky ny sokajy ny fandaniana.'],
    ['Données d’exemple ajoutées', 'Sample data added', 'Tafiditra ny angona ohatra'],
    ['Des données sont enregistrées sur cet appareil. Voulez-vous les envoyer dans l\'espace en ligne partagé ?', 'Some data is saved on this device. Send it to the shared online space?', 'Misy angona voatahiry amin\'ity fitaovana ity. Halefa any amin\'ny toerana iombonana an-tserasera ve?'],
    ['Importer', 'Import', 'Ampidiro'],
    ['Voir', 'See', 'Jereo'],

    // Revenus
    ['Chaque membre enregistre ses entrées d’argent', 'Each member records their income', 'Samy manoratra ny vola miditra aminy'],
    ['Ajouter un revenu', 'Add income', 'Hanampy fidiram-bola'],
    ['Revenus par personne', 'Income per person', 'Fidiram-bola isan\'olona'],
    ['Aujourd\'hui', 'Today', 'Androany'],
    ['Foyer', 'Household', 'Tokantrano'],
    ['Sources du mois', 'This month\'s sources', 'Loharanom-bola amin\'ity volana ity'],
    ['Rien ce mois-ci', 'Nothing this month', 'Tsy misy amin\'ity volana ity'],
    ['Historique', 'History', 'Tantara'],
    ['Aucun revenu', 'No income', 'Tsy misy fidiram-bola'],
    ['Ajoutez un salaire, une recette de commerce, un cadeau…', 'Add a salary, shop takings, a gift…', 'Ampio karama, vola azo tamin\'ny varotra, fanomezana…'],
    ['Tous', 'All', 'Rehetra'],
    ['Ce mois', 'This month', 'Ity volana ity'],
    ['Cette année', 'This year', 'Ity taona ity'],
    ['Tout', 'All time', 'Rehetra'],
    ['Toutes catégories', 'All categories', 'Sokajy rehetra'],
    ['Source', 'Source', 'Loharano'],

    // Dépenses
    ['Personnelles et communes, par catégorie', 'Personal and shared, by category', 'Manokana sy iombonana, isaky ny sokajy'],
    ['Ajouter une dépense', 'Add an expense', 'Hanampy fandaniana'],
    ['Dépenses communes', 'Shared expenses', 'Fandaniana iombonana'],
    ['Total du couple', 'Couple total', 'Totalin\'ny mpivady'],
    ['Liste des dépenses', 'Expense list', 'Lisitry ny fandaniana'],
    ['Par catégorie', 'By category', 'Isaky ny sokajy'],
    ['Aucune dépense', 'No expenses', 'Tsy misy fandaniana'],
    ['Enregistrez les courses, le loyer, l’aide à la famille…', 'Record groceries, rent, family support…', 'Soraty ny entana novidiana, ny hofan-trano, ny fanampiana fianakaviana…'],

    // Épargne
    ['Ce que nous mettons de côté, seuls ou ensemble', 'What we put aside, alone or together', 'Ny vola atokanay, samy irery na miaraka'],
    ['Versement / retrait', 'Deposit / withdrawal', 'Fametrahana / fisintonana'],
    ['Épargne totale', 'Total savings', 'Tahiry rehetra'],
    ['Apports initiaux des projets inclus', 'Including projects\' starting amounts', 'Ao anatiny ny vola efa nisy tamin\'ny tetikasa'],
    ['Ce mois-ci', 'This month', 'Ity volana ity'],
    ['Définir un objectif mensuel', 'Set a monthly goal', 'Hametraka tanjona isam-bolana'],
    ['Épargne commune', 'Shared savings', 'Tahiry iombonana'],
    ['Total des versements nets', 'Net deposits total', 'Totalin\'ny vola napetraka (madio)'],
    ['Évolution de nos économies', 'How our savings are growing', 'Ny fivoaran\'ny tahirinay'],
    ['Évolution de l\'épargne', 'Savings over time', 'Fivoaran\'ny tahiry'],
    ['12 derniers mois', 'Last 12 months', '12 volana farany'],
    ['Objectif mensuel', 'Monthly goal', 'Tanjona isam-bolana'],
    ['Montant à épargner chaque mois (Ar)', 'Amount to save each month (Ar)', 'Vola hotehirizina isam-bolana (Ar)'],
    ['Capacité d\'épargne moyenne (3 derniers mois) :', 'Average saving capacity (last 3 months):', 'Salanisan\'ny vola azo tehirizina (3 volana farany):'],
    ['Mouvements', 'Transactions', 'Fihetsehana'],
    ['Aucun mouvement', 'No transactions', 'Tsy misy fihetsehana'],
    ['Enregistrez vos versements et retraits, et liez-les à un projet.', 'Record your deposits and withdrawals, and link them to a project.', 'Soraty ny vola apetraka sy alaina, ary ampifandraiso amin\'ny tetikasa.'],
    ['Versement', 'Deposit', 'Fametrahana'],
    ['Retrait', 'Withdrawal', 'Fisintonana'],
    ['Épargne générale', 'General savings', 'Tahiry ankapobeny'],
    ['— Épargne générale —', '— General savings —', '— Tahiry ankapobeny —'],

    // Projets
    ['Terrain, maison, voiture, voyage, fonds d’urgence…', 'Land, house, car, travel, emergency fund…', 'Tany, trano, fiara, dia, tahiry vonjy maika…'],
    ['TOUS NOS PROJETS', 'ALL OUR PROJECTS', 'NY TETIKASANAY REHETRA'],
    ['Reste à réunir :', 'Still to raise:', 'Sisa hotadiavina:'],
    ['Reste à réunir', 'Still to raise', 'Sisa hotadiavina'],
    ['Construisons votre avenir', 'Let\'s build your future', 'Andao hanorina ny ho avinareo'],
    ['Créez vos objectifs : achat du terrain, construction de la maison…', 'Create your goals: buying land, building the house…', 'Mamorona ny tanjonareo: fividianana tany, fananganana trano…'],
    ['Créer un projet', 'Create a project', 'Hamorona tetikasa'],
    ['Objectif atteint ! Félicitations 🎉', 'Goal reached! Congratulations 🎉', 'Tratra ny tanjona! Arahabaina 🎉'],
    ['Ajoutez des versements pour estimer la durée.', 'Add deposits to estimate the time needed.', 'Ampio fametrahana vola mba hanombanana ny faharetany.'],
    ['en bonne voie', 'on track', 'mandeha tsara'],
    ['en retard', 'behind', 'tara'],
    ['il faut', 'you need', 'ilaina'],
    ['/mois pour l\'échéance', '/month to meet the deadline', '/volana mba hahatratra ny fe-potoana'],
    ['Objectif', 'Goal', 'Tanjona'],
    ['Déjà économisé', 'Already saved', 'Efa voatahiry'],
    ['Date souhaitée', 'Target date', 'Daty kendrena'],
    ['Rythme actuel', 'Current pace', 'Hafainganam-pandeha ankehitriny'],
    ['Nécessaire pour l\'échéance', 'Needed for the deadline', 'Ilaina hahatratrarana ny fe-potoana'],
    ['Estimation', 'Estimate', 'Tombana'],
    ['Verser de l\'argent', 'Add money', 'Hametraka vola'],
    ['Modifier', 'Edit', 'Ovay'],
    ['Supprimer', 'Delete', 'Fafao'],
    ['🧱 Étapes & budget des travaux', '🧱 Construction stages & budget', '🧱 Dingana sy tetibolan\'ny asa'],
    ['Ajouter une étape', 'Add a stage', 'Hanampy dingana'],
    ['Ex : fondations, murs, toiture, finitions… Ajoutez les étapes pour suivre le budget de chaque phase.', 'E.g. foundations, walls, roof, finishing… Add stages to track each phase\'s budget.', 'Ohatra: fototra, rindrina, tafo, famaranana… Ampio ny dingana hanarahana ny tetibolan\'ny dingana tsirairay.'],
    ['Étape', 'Stage', 'Dingana'],
    ['Dépensé', 'Spent', 'Lany'],
    ['Retirer', 'Remove', 'Esory'],
    ['Versements liés', 'Linked deposits', 'Vola napetraka mifandray'],
    ['Aucun versement pour le moment.', 'No deposits yet.', 'Tsy mbola misy vola napetraka.'],

    // Budget
    ['Budget intelligent', 'Smart budget', 'Tetibola marani-tsaina'],
    ['Budgets par catégorie, alertes et simulations', 'Budgets by category, alerts and simulations', 'Tetibola isaky ny sokajy, fampitandremana ary simulation'],
    ['Revenus moyens', 'Average income', 'Salanisan\'ny fidiram-bola'],
    ['par mois (3 derniers mois)', 'per month (last 3 months)', 'isam-bolana (3 volana farany)'],
    ['Dépenses moyennes', 'Average expenses', 'Salanisan\'ny fandaniana'],
    ['Capacité d\'épargne', 'Saving capacity', 'Vola azo tehirizina'],
    ['Ce que nous pouvons économiser / mois', 'What we can save / month', 'Ny vola azonay tehirizina / volana'],
    ['Taux d\'épargne', 'Savings rate', 'Tahan\'ny tahiry'],
    ['Budget mensuel par catégorie', 'Monthly budget by category', 'Tetibola isam-bolana isaky ny sokajy'],
    ['⛔ Dépassé', '⛔ Over', '⛔ Mihoatra'],
    ['⚠ Attention', '⚠ Careful', '⚠ Mitandrema'],
    ['✓ OK', '✓ OK', '✓ Tsara'],
    ['Simulateur', 'Simulator', 'Simulateur'],
    ['Atteindre nos objectifs plus vite', 'Reach our goals faster', 'Hahatratra haingana kokoa ny tanjonay'],
    ['Aucun projet', 'No project', 'Tsy misy tetikasa'],
    ['Créez un projet pour lancer une simulation.', 'Create a project to run a simulation.', 'Mamorona tetikasa hanaovana simulation.'],
    ['Épargne supplémentaire par mois :', 'Extra savings per month:', 'Tahiry fanampiny isam-bolana:'],
    ['Réduire nos dépenses de :', 'Reduce our expenses by:', 'Hampihena ny fandanianay:'],
    ['Avec ces efforts', 'With these efforts', 'Miaraka amin\'ireo ezaka ireo'],
    ['Comparaison sur 12 mois', '12-month comparison', 'Fampitahana amin\'ny 12 volana'],
    ['Aucun versement récent sur ce projet : le rythme actuel utilise votre épargne moyenne.', 'No recent deposits on this project: the current pace uses your average savings.', 'Tsy misy vola napetraka vao haingana amin\'ity tetikasa ity: ny salanisan\'ny tahirinareo no ampiasaina.'],

    // Paramètres
    ['Profils, couleurs, sauvegarde et export', 'Profiles, colours, backup and export', 'Mombamomba, loko, fitehirizana ary fanondranana'],
    ['Couleurs de l\'application', 'App colours', 'Lokon\'ny app'],
    ['Couleur principale', 'Main colour', 'Loko voalohany'],
    ['Couleur secondaire', 'Secondary colour', 'Loko faharoa'],
    ['Mode d\'affichage', 'Display mode', 'Fomba fisehoana'],
    ['☀️ Clair', '☀️ Light', '☀️ Mazava'],
    ['🌙 Sombre', '🌙 Dark', '🌙 Maizina'],
    ['🖥️ Automatique', '🖥️ Automatic', '🖥️ Ho azy'],
    ['Chaque appareil garde ses propres couleurs.', 'Each device keeps its own colours.', 'Samy mitazona ny lokony ny fitaovana tsirairay.'],
    ['Langue', 'Language', 'Fiteny'],
    ['Identité & profils', 'Identity & profiles', 'Mombamomba'],
    ['Logo : photo du couple', 'Logo: couple photo', 'Logo: sarin\'ny mpivady'],
    ['Affichée sur le tableau de bord', 'Shown on the dashboard', 'Aseho eo amin\'ny tabilao fitantanana'],
    ['Choisir', 'Choose', 'Hifidy'],
    ['Photo', 'Photo', 'Sary'],
    ['Prénom', 'First name', 'Anarana'],
    ['Rôle', 'Role', 'Andraikitra'],
    ['Époux', 'Husband', 'Vady lahy'],
    ['Épouse', 'Wife', 'Vady vavy'],
    ['Devise / slogan', 'Motto / slogan', 'Teny filamatra'],
    ['🏷️ Catégories', '🏷️ Categories', '🏷️ Sokajy'],
    ['Ajoutez vos propres catégories', 'Add your own categories', 'Ampio ny sokajinareo manokana'],
    ['Sources de revenus', 'Income sources', 'Loharanom-bola'],
    ['Nouvelle catégorie…', 'New category…', 'Sokajy vaovao…'],
    ['＋ Nouvelle catégorie', '＋ New category', '＋ Sokajy vaovao'],
    ['Nom de la catégorie', 'Category name', 'Anaran\'ny sokajy'],
    ['Ajouter', 'Add', 'Ampio'],
    ['Les catégories ajoutées sont partagées entre vos deux comptes. Elles apparaissent aussi dans le budget et les rapports.', 'Added categories are shared between your two accounts. They also appear in the budget and reports.', 'Iombonan\'ny kaontinareo roa ny sokajy ampiana. Miseho ao amin\'ny tetibola sy ny tatitra ihany koa izy ireo.'],
    ['Exporter & sauvegarder', 'Export & back up', 'Fanondranana sy fitehirizana'],
    ['Excel (.xlsx)', 'Excel (.xlsx)', 'Excel (.xlsx)'],
    ['Rapport PDF du mois', 'Monthly PDF report', 'Tatitra PDF isam-bolana'],
    ['Sauvegarde complète (.json)', 'Full backup (.json)', 'Fitehirizana feno (.json)'],
    ['Restaurer une sauvegarde', 'Restore a backup', 'Hamerina fitehirizana'],
    ['✅ Vos données sont enregistrées en ligne et partagées entre vos deux comptes. Faites quand même une sauvegarde .json de temps en temps.', '✅ Your data is saved online and shared between your two accounts. Still, make a .json backup from time to time.', '✅ Voatahiry an-tserasera ny angonareo ary iombonan\'ny kaontinareo roa. Ataovy ihany anefa indraindray ny fitehirizana .json.'],
    ['⚠️ Les données sont enregistrées uniquement sur cet appareil. Faites des sauvegardes régulières.', '⚠️ Data is saved on this device only. Back up regularly.', '⚠️ Amin\'ity fitaovana ity ihany no voatahiry ny angona. Ataovy matetika ny fitehirizana.'],
    ['Compte & synchronisation', 'Account & sync', 'Kaonty sy fifandraisana'],
    ['Connecté :', 'Signed in:', 'Tafiditra:'],
    ['Changer le mot de passe', 'Change password', 'Hanova ny teny miafina'],
    ['Se déconnecter', 'Sign out', 'Hivoaka'],
    ['✓ Application installée', '✓ App installed', '✓ Voapetraka ny app'],
    ['Je suis :', 'I am:', 'Izaho dia:'],
    ['Les nouvelles opérations sont attribuées par défaut à la personne choisie ici.', 'New entries are assigned by default to the person chosen here.', 'Ho an\'ny olona voafidy eto no hametrahana ho azy ny asa vaovao.'],
    ['Effacer toutes les données', 'Delete all data', 'Hamafa ny angona rehetra'],
    ['Rose', 'Rose', 'Mavokely'], ['Émeraude', 'Emerald', 'Maitso'], ['Océan', 'Ocean', 'Ranomasina'], ['Améthyste', 'Amethyst', 'Volomparasy'],
    ['Or', 'Gold', 'Volamena'], ['Corail', 'Coral', 'Voasary'], ['Nuit', 'Night', 'Alina'], ['Menthe', 'Mint', 'Maitso mazava'],

    // Formulaires
    ['Nouveau revenu', 'New income', 'Fidiram-bola vaovao'],
    ['Modifier le revenu', 'Edit income', 'Hanova fidiram-bola'],
    ['Nouvelle dépense', 'New expense', 'Fandaniana vaovao'],
    ['Modifier la dépense', 'Edit expense', 'Hanova fandaniana'],
    ['Mouvement d’épargne', 'Savings transaction', 'Fihetsehan\'ny tahiry'],
    ['Modifier le mouvement', 'Edit transaction', 'Hanova fihetsehana'],
    ['Modifier le projet', 'Edit project', 'Hanova tetikasa'],
    ['Qui ?', 'Who?', 'Iza?'],
    ['Qui a payé ?', 'Who paid?', 'Iza no nandoa?'],
    ['Montant (Ar)', 'Amount (Ar)', 'Vola (Ar)'],
    ['Catégorie', 'Category', 'Sokajy'],
    ['Date', 'Date', 'Daty'],
    ['Description (facultatif)', 'Description (optional)', 'Fanazavana (tsy voatery)'],
    ['Type', 'Type', 'Karazana'],
    ['Pour quel projet ?', 'For which project?', 'Ho an\'ny tetikasa inona?'],
    ['Type de projet', 'Project type', 'Karazana tetikasa'],
    ['Nom', 'Name', 'Anarana'],
    ['Montant total nécessaire (Ar)', 'Total amount needed (Ar)', 'Vola ilaina rehetra (Ar)'],
    ['Déjà économisé au départ (Ar)', 'Already saved at the start (Ar)', 'Vola efa voatahiry tany am-piandohana (Ar)'],
    ['Les versements d\'épargne liés à ce projet s\'ajouteront automatiquement au montant économisé.', 'Savings deposits linked to this project will be added to the saved amount automatically.', 'Hampiana ho azy amin\'ny vola voatahiry ny fametrahana mifandray amin\'ity tetikasa ity.'],
    ['Annuler', 'Cancel', 'Foano'],
    ['Enregistrer', 'Save', 'Tehirizo'],
    ['Mettre à jour', 'Update', 'Havaozina'],
    ['Confirmation', 'Confirmation', 'Fanamafisana'],
    ['Supprimer cette opération ?', 'Delete this entry?', 'Hofafana ve ity asa ity?'],
    ['Restaurer', 'Restore', 'Averina'],
    ['Tout effacer', 'Delete everything', 'Fafao daholo'],
    ['Commun', 'Shared', 'Iombonana'],
    ['♥ Commun', '♥ Shared', '♥ Iombonana'],
    ['🐷 Versement', '🐷 Deposit', '🐷 Fametrahana'],
    ['↩️ Retrait', '↩️ Withdrawal', '↩️ Fisintonana'],
    ['Ex : salaire novembre', 'E.g. November salary', 'Ohatra: karama novambra'],
    ['Ex : marché du samedi', 'E.g. Saturday market', 'Ohatra: tsena asabotsy'],
    ['Ex : épargne du mois', 'E.g. this month\'s savings', 'Ohatra: tahiry amin\'ity volana ity'],
    ['Ex : Achat du terrain', 'E.g. Buying the land', 'Ohatra: Fividianana tany'],
    ['Ex : 1 200 000', 'E.g. 1 200 000', 'Ohatra: 1 200 000'],
    ['Budget', 'Budget', 'Tetibola'],

    // Catégories, sources, projets
    ['Alimentation & courses', 'Food & groceries', 'Sakafo sy entana'],
    ['Dépenses quotidiennes', 'Daily expenses', 'Fandaniana isan\'andro'],
    ['Loyer', 'Rent', 'Hofan-trano'],
    ['Électricité & eau', 'Electricity & water', 'Jiro sy rano'],
    ['Internet & téléphone', 'Internet & phone', 'Internet sy telefaonina'],
    ['Transport', 'Transport', 'Fitaterana'],
    ['Santé', 'Health', 'Fahasalamana'],
    ['Vêtements', 'Clothing', 'Akanjo'],
    ['Loisirs', 'Leisure', 'Fialam-boly'],
    ['Aide parents & famille', 'Support for parents & family', 'Fanampiana ray aman-dreny sy fianakaviana'],
    ['Travaux maison', 'House construction', 'Asa fanorenana trano'],
    ['Exceptionnel & imprévu', 'Exceptional & unexpected', 'Tsy ampoizina'],
    ['Autre', 'Other', 'Hafa'],
    ['Salaire', 'Salary', 'Karama'],
    ['Commerce', 'Business', 'Varotra'],
    ['Activité supplémentaire', 'Side activity', 'Asa fanampiny'],
    ['Cadeau', 'Gift', 'Fanomezana'],
    ['Autre entrée', 'Other income', 'Fidirana hafa'],
    ['Terrain', 'Land', 'Tany'],
    ['Maison', 'House', 'Trano'],
    ['Voiture', 'Car', 'Fiara'],
    ['Voyage', 'Travel', 'Dia'],
    ['Investissement', 'Investment', 'Fampiasam-bola'],
    ['Fonds d\'urgence', 'Emergency fund', 'Tahiry vonjy maika'],
    ['Autre projet', 'Other project', 'Tetikasa hafa'],
    ['Achat du terrain', 'Buying the land', 'Fividianana tany'],
    ['Construction de la maison', 'Building the house', 'Fananganana trano'],
    ['Achat d\'une voiture', 'Buying a car', 'Fividianana fiara'],
    ['Fondations', 'Foundations', 'Fototra'],
    ['Murs & charpente', 'Walls & framework', 'Rindrina sy rafitra'],
    ['Toiture', 'Roof', 'Tafo'],
    ['Finitions', 'Finishing', 'Famaranana'],
    ['Courses du mois', 'Monthly groceries', 'Entana isam-bolana'],
    ['Aide aux parents', 'Help for parents', 'Fanampiana ray aman-dreny'],
    ['Recettes boutique', 'Shop takings', 'Vola azo tamin\'ny fivarotana'],
    ['Couture', 'Sewing', 'Fanjairana'],
    ['Sortie', 'Outing', 'Fivoahana'],
    ['Épargne terrain', 'Land savings', 'Tahiry ho an\'ny tany'],
    ['Épargne maison', 'House savings', 'Tahiry ho an\'ny trano'],

    // Connexion
    ['E-mail', 'Email', 'Mailaka'],
    ['Mot de passe', 'Password', 'Teny miafina'],
    ['Mot de passe (8 caractères minimum)', 'Password (at least 8 characters)', 'Teny miafina (litera 8 farafahakeliny)'],
    ['Confirmer le mot de passe', 'Confirm password', 'Avereno ny teny miafina'],
    ['Se connecter', 'Sign in', 'Hiditra'],
    ['Créer mon compte', 'Create my account', 'Hamorona ny kaontiko'],
    ['Mot de passe oublié ?', 'Forgot password?', 'Hadino ny teny miafina?'],
    ['Première visite ? Créer mon compte', 'First visit? Create my account', 'Fidirana voalohany? Hamorona kaonty'],
    ['J\'ai déjà un compte · Se connecter', 'I already have an account · Sign in', 'Efa manana kaonty aho · Hiditra'],
    ['Connexion…', 'Signing in…', 'Miditra…'],
    ['Vérifiez votre e-mail', 'Check your email', 'Hamarino ny mailakao'],
    ['Un lien de confirmation a été envoyé à', 'A confirmation link was sent to', 'Nalefa any amin\'ny'],
    ['. Ouvrez-le (regardez aussi dans les spams), puis revenez ici.', '. Open it (check spam too), then come back here.', ' ny rohy fanamafisana. Sokafy izy (jereo koa ao amin\'ny spam), dia miverena eto.'],
    ['J\'ai confirmé mon e-mail', 'I have confirmed my email', 'Efa nohamafisiko ny mailaka'],
    ['Renvoyer l\'e-mail', 'Resend the email', 'Alefaso indray ny mailaka'],
    ['Changer de compte', 'Switch account', 'Hanova kaonty'],
    ['Accès refusé', 'Access denied', 'Tsy nahazo alalana'],
    ['Recharger', 'Reload', 'Avereno'],
    ['Impossible de joindre le serveur. Vérifiez votre connexion internet puis rechargez la page.', 'Cannot reach the server. Check your internet connection and reload the page.', 'Tsy tratra ny serveur. Hamarino ny internet dia avereno sokafana ny pejy.'],
    ['E-mail ou mot de passe incorrect.', 'Incorrect email or password.', 'Diso ny mailaka na ny teny miafina.'],
    ['Aucun compte avec cet e-mail.', 'No account with this email.', 'Tsy misy kaonty amin\'io mailaka io.'],
    ['Trop de tentatives. Réessayez dans quelques minutes.', 'Too many attempts. Try again in a few minutes.', 'Be loatra ny andrana. Andramo indray afaka minitra vitsivitsy.'],
    ['Pas de connexion internet.', 'No internet connection.', 'Tsy misy internet.'],
    ['Adresse e-mail invalide.', 'Invalid email address.', 'Tsy mety ny adiresy mailaka.'],
    ['Cette adresse e-mail n\'est pas autorisée pour Z&E.', 'This email address is not allowed for Z&E.', 'Tsy nahazo alalana amin\'ny Z&E io mailaka io.'],
    ['Le mot de passe doit contenir au moins 8 caractères.', 'The password must be at least 8 characters.', 'Tokony ho litera 8 farafahakeliny ny teny miafina.'],
    ['Les deux mots de passe ne correspondent pas.', 'The two passwords do not match.', 'Tsy mitovy ny teny miafina roa.'],
    ['Un compte existe déjà avec cet e-mail : utilisez « Se connecter ».', 'An account already exists with this email: use “Sign in”.', 'Efa misy kaonty amin\'io mailaka io: ampiasao ny « Hiditra ».'],
    ['Mot de passe trop faible.', 'Password too weak.', 'Malemy loatra ny teny miafina.'],
    ['L\'e-mail n\'est pas encore vérifié. Ouvrez le lien reçu (regardez aussi dans les spams).', 'The email is not verified yet. Open the link you received (check spam too).', 'Mbola tsy voamarina ny mailaka. Sokafy ny rohy voaray (jereo koa ao amin\'ny spam).'],
    ['Écrivez d’abord votre e-mail ci-dessus.', 'First type your email above.', 'Soraty aloha eo ambony ny mailakao.'],

    // Installation
    ['📲 Installer Z&E', '📲 Install Z&E', '📲 Hametraka ny Z&E'],
    ['Une fois installée, Z&E s\'ouvre comme une vraie application, avec son icône, sans chercher le lien.', 'Once installed, Z&E opens like a real app, with its own icon, no need to look for the link.', 'Rehefa voapetraka, misokatra toy ny tena app ny Z&E, miaraka amin\'ny icône-ny, tsy mila mitady rohy.'],
    ['cet appareil', 'this device', 'ity fitaovana ity'],
    ['Raccourci simple pour le bureau', 'Simple desktop shortcut', 'Raccourci tsotra eo amin\'ny bureau'],
    ['Téléchargez ce fichier puis déplacez-le sur le bureau : un double-clic ouvre Z&E.', 'Download this file and move it to your desktop: double-click opens Z&E.', 'Alaivo ity rakitra ity dia afindrao eo amin\'ny bureau: tsindrio indroa dia misokatra ny Z&E.'],
    ['Raccourci Mac', 'Mac shortcut', 'Raccourci Mac'],
    ['Raccourci Windows', 'Windows shortcut', 'Raccourci Windows'],
    ['Dans la barre d\'adresse, cliquez sur l\'icône', 'In the address bar, click the icon', 'Ao amin\'ny barre d\'adresse, tsindrio ny icône'],
    ['Cliquez sur l\'icône', 'Click the icon', 'Tsindrio ny icône'],
    ['à droite (ou menu', 'on the right (or menu', 'eo ankavanana (na menu'],
    ['dans la barre d\'adresse (ou menu', 'in the address bar (or menu', 'ao amin\'ny barre d\'adresse (na menu'],
    ['Caster, enregistrer et partager', 'Cast, save and share', 'Caster, enregistrer et partager'],
    ['Installer la page en tant qu\'application', 'Install page as app', 'Installer la page en tant qu\'application'],
    ['Z&E s\'ouvre dans sa propre fenêtre et apparaît dans le Launchpad et le Dock.', 'Z&E opens in its own window and appears in Launchpad and the Dock.', 'Misokatra amin\'ny fenêtre-ny manokana ny Z&E ary hita ao amin\'ny Launchpad sy ny Dock.'],
    ['Pour le bureau : Finder →', 'For the desktop: Finder →', 'Ho an\'ny bureau: Finder →'],
    ['→ glissez', '→ drag', '→ tariho'],
    ['sur le bureau en maintenant', 'to the desktop while holding', 'mankany amin\'ny bureau sady tanana ny'],
    ['Avec Safari : menu', 'With Safari: menu', 'Amin\'ny Safari: menu'],
    ['Cochez « Créer un raccourci sur le bureau » si proposé : l\'icône Z&E apparaît sur le bureau et dans le menu Démarrer.', 'Tick “Create a desktop shortcut” if offered: the Z&E icon appears on the desktop and in the Start menu.', 'Mariho ny « Créer un raccourci sur le bureau » raha misy: hiseho eo amin\'ny bureau sy ao amin\'ny menu Démarrer ny icône Z&E.'],
    ['Menu', 'Menu', 'Menu'],
    ['Installer l\'application', 'Install app', 'Hametraka ny app'],
    ['(ou « Ajouter à l\'écran d\'accueil »).', '(or “Add to Home screen”).', '(na « Ajouter à l\'écran d\'accueil »).'],
    ['L\'icône Z&E apparaît sur l\'écran d\'accueil.', 'The Z&E icon appears on the home screen.', 'Hiseho eo amin\'ny écran d\'accueil ny icône Z&E.'],
    ['Touchez le bouton', 'Tap the', 'Tsindrio ny bokotra'],
    ['Partager', 'Share', 'Partager'],
    ['en bas de l\'écran.', 'button at the bottom of the screen.', 'eo ambanin\'ny écran.'],
    ['Choisissez', 'Choose', 'Safidio'],
    ['Sur l\'écran d\'accueil', 'Add to Home Screen', 'Sur l\'écran d\'accueil'],
    [', puis', ', then', ', avy eo'],

    // Messages (toasts)
    ['Enregistré ✓', 'Saved ✓', 'Voatahiry ✓'],
    ['Mis à jour ✓', 'Updated ✓', 'Voavao ✓'],
    ['Supprimé', 'Deleted', 'Voafafa'],
    ['Indiquez un montant', 'Enter an amount', 'Soraty ny vola'],
    ['Pensez à indiquer le montant', 'Remember to enter the amount', 'Aza adino ny manoratra ny vola'],
    ['Projet supprimé', 'Project deleted', 'Voafafa ny tetikasa'],
    ['Catégorie supprimée', 'Category deleted', 'Voafafa ny sokajy'],
    ['Écrivez le nom de la catégorie', 'Type the category name', 'Soraty ny anaran\'ny sokajy'],
    ['Objectif mensuel enregistré ✓', 'Monthly goal saved ✓', 'Voatahiry ny tanjona isam-bolana ✓'],
    ['Photo mise à jour ✓', 'Photo updated ✓', 'Voavao ny sary ✓'],
    ['Image illisible', 'Unreadable image', 'Tsy voavaky ny sary'],
    ['Données effacées', 'Data deleted', 'Voafafa ny angona'],
    ['Données importées dans le cloud ✓', 'Data imported to the cloud ✓', 'Tafiditra an-tserasera ny angona ✓'],
    ['Sauvegarde restaurée ✓', 'Backup restored ✓', 'Naverina ny fitehirizana ✓'],
    ['Fichier de sauvegarde invalide', 'Invalid backup file', 'Tsy mety ny rakitra fitehirizana'],
    ['Préparation du fichier Excel…', 'Preparing the Excel file…', 'Manomana ny rakitra Excel…'],
    ['Préparation du rapport PDF…', 'Preparing the PDF report…', 'Manomana ny tatitra PDF…'],
    ['Impossible de charger le module Excel', 'Could not load the Excel module', 'Tsy voasokatra ny module Excel'],
    ['Impossible de charger le module PDF', 'Could not load the PDF module', 'Tsy voasokatra ny module PDF'],
    ['Téléchargement impossible ici', 'Download not possible here', 'Tsy azo alaina eto'],
    ['Fichier enregistré ✓', 'File saved ✓', 'Voatahiry ny rakitra ✓'],
    ['E-mail renvoyé ✓', 'Email resent ✓', 'Nalefa indray ny mailaka ✓'],
    ['E-mail de réinitialisation envoyé ✓', 'Reset email sent ✓', 'Nalefa ny mailaka hanovana teny miafina ✓'],
    ['E-mail vérifié ✓ Bienvenue !', 'Email verified ✓ Welcome!', 'Voamarina ny mailaka ✓ Tongasoa!'],
    ['Patientez quelques minutes avant de renvoyer.', 'Wait a few minutes before resending.', 'Andraso minitra vitsivitsy vao mandefa indray.'],
    ['Envoi impossible', 'Could not send', 'Tsy lasa'],
    ['Erreur de synchronisation, réessayez', 'Sync error, please try again', 'Nisy olana tamin\'ny fifandraisana, andramo indray'],
    ['Ce compte n\'a pas le droit de modifier les données', 'This account is not allowed to change the data', 'Tsy manan-jo hanova ny angona io kaonty io'],
    ['Limite gratuite atteinte pour aujourd’hui', 'Free daily limit reached', 'Tratra ny fetra maimaim-poana anio'],
    ['Z&E est installée ✓ Retrouvez-la sur votre bureau / écran d’accueil', 'Z&E is installed ✓ Find it on your desktop / home screen', 'Voapetraka ny Z&E ✓ Ho hitanao eo amin\'ny bureau / écran d\'accueil'],
    // Exports Excel / PDF
    ['Résumé mensuel', 'Monthly summary', 'Famintinana isam-bolana'],
    ['Mois', 'Month', 'Volana'],
    ['Revenus (Ar)', 'Income (Ar)', 'Fidiram-bola (Ar)'],
    ['Dépenses (Ar)', 'Expenses (Ar)', 'Fandaniana (Ar)'],
    ['Épargne (Ar)', 'Savings (Ar)', 'Tahiry (Ar)'],
    ['Solde (Ar)', 'Balance (Ar)', 'Vola sisa (Ar)'],
    ['Membre', 'Member', 'Mpikambana'],
    ['Description', 'Description', 'Fanazavana'],
    ['Montant', 'Amount', 'Vola'],
    ['Objectif (Ar)', 'Goal (Ar)', 'Tanjona (Ar)'],
    ['Économisé (Ar)', 'Saved (Ar)', 'Voatahiry (Ar)'],
    ['Économisé', 'Saved', 'Voatahiry'],
    ['Reste (Ar)', 'Remaining (Ar)', 'Sisa (Ar)'],
    ['Progression (%)', 'Progress (%)', 'Fandrosoana (%)'],
    ['Progression', 'Progress', 'Fandrosoana'],
    ['Rythme (Ar/mois)', 'Pace (Ar/month)', 'Hafainganana (Ar/volana)'],
    ['Estimation (mois)', 'Estimate (months)', 'Tombana (volana)'],
    ['Budgets', 'Budgets', 'Tetibola'],
    ['Budget mensuel (Ar)', 'Monthly budget (Ar)', 'Tetibola isam-bolana (Ar)'],
    ['Général', 'General', 'Ankapobeny'],
    ['Indicateur', 'Indicator', 'Famantarana'],
    ['État', 'Status', 'Toe-javatra'],
    ['Opérations du mois', 'This month\'s transactions', 'Ny asa natao tamin\'ity volana ity'],
    ['Rapport de', 'Report for', 'Tatitra'],
    ['dont', 'of which', 'anisan\'izany'],
    ['Dépassé', 'Over', 'Mihoatra'],
    ['Attention', 'Careful', 'Mitandrema'],
    ['OK', 'OK', 'Tsara'],
    ['Aucune donnée', 'No data', 'Tsy misy angona'],
  ];


  // Phrases avec valeurs : {a}, {b}, {c}, {d} = parties variables (montants, noms, dates…)
  // [modèle français, english, malagasy]
  const P = [
    ['{a} dépensés', '{a} spent', '{a} lany'],
    ['{a}/mois', '{a}/month', '{a}/volana'],
    ['(≈ {a}/mois)', '(≈ {a}/month)', '(≈ {a}/volana)'],
    ['/mois.', '/month.', '/volana.'],
    ['{a} mois', '{a} months', '{a} volana'],
    ['{a} mois ({b})', '{a} months ({b})', '{a} volana ({b})'],
    ['{a} mois gagnés 🎉', '{a} months saved 🎉', 'volana {a} no nahazoana 🎉'],
    ['net {a}', 'net {a}', 'madio {a}'],
    ['{a} entrée(s)', '{a} entr(ies)', 'fidirana {a}'],
    ['{a} dépense(s)', '{a} expense(s)', 'fandaniana {a}'],
    ['{a} projet(s)', '{a} project(s)', 'tetikasa {a}'],
    ['{a} % de l\'objectif mensuel', '{a} % of the monthly goal', '{a} % amin\'ny tanjona isam-bolana'],
    ['{a} % des revenus', '{a} % of income', '{a} % amin\'ny fidiram-bola'],
    ['{a} % du budget ({b})', '{a} % of the budget ({b})', '{a} % amin\'ny tetibola ({b})'],
    [': {a} % du budget déjà utilisé', ': {a} % of the budget already used', ': efa lany ny {a} % amin\'ny tetibola'],
    [': budget dépassé de {a} ({b} %)', ': budget exceeded by {a} ({b} %)', ': mihoatra {a} ny tetibola ({b} %)'],
    [': au rythme actuel ({a}/mois), l\'échéance ne sera pas tenue. Il faudrait {b}/mois.', ': at the current pace ({a}/month), the deadline won\'t be met. You would need {b}/month.', ': amin\'ny hafainganana ankehitriny ({a}/volana), tsy ho tratra ny fe-potoana. Ilaina {b}/volana.'],
    [': +{a} % par rapport à la moyenne des 3 derniers mois', ': +{a} % compared with the last 3 months\' average', ': +{a} % raha oharina amin\'ny salanisan\'ny 3 volana farany'],
    ['Solde du mois négatif : {a}. Les dépenses et l\'épargne dépassent les revenus.', 'Negative balance this month: {a}. Expenses and savings exceed income.', 'Ratsy ny vola sisa amin\'ity volana ity: {a}. Mihoatra ny fidiram-bola ny fandaniana sy ny tahiry.'],
    ['Épargne du mois : {a} sur {b} prévus — encore {c} à mettre de côté.', 'Savings this month: {a} of {b} planned — {c} still to put aside.', 'Tahiry amin\'ity volana ity: {a} amin\'ny {b} nokasaina — mbola {c} no hatokana.'],
    ['{a} : {b} % réunis, reste {c}.', '{a}: {b} % raised, {c} to go.', '{a}: {b} % no voaangona, sisa {c}.'],
    ['Réduire les catégories en dépassement : {a} : budget dépassé de {b} ({c} %)', 'Cut back the categories over budget: {a}: exceeded by {b} ({c} %)', 'Ahenao ny sokajy mihoatra: {a}: mihoatra {b} ({c} %)'],
    ['La catégorie « {a} » représente {b} % des revenus : c\'est le premier levier d\'économie.', 'The “{a}” category is {b} % of income: it\'s your first place to save.', 'Ny sokajy « {a} » dia {b} % amin\'ny fidiram-bola: io no voalohany azo itsitsiana.'],
    ['Votre capacité d\'épargne moyenne est de {a}/mois : vous pourriez épargner {b} de plus.', 'Your average saving capacity is {a}/month: you could save {b} more.', '{a}/volana ny salanisan\'ny vola azonareo tehirizina: afaka mitahiry {b} fanampiny ianareo.'],
    ['Année {a}', 'Year {a}', 'Taona {a}'],
    ['Dépenses de {a}', '{a}\'s expenses', 'Fandanian\'i {a}'],
    ['Dépensé {a} / prévu {b}', 'Spent {a} / planned {b}', 'Lany {a} / nokasaina {b}'],
    ['Objectif {a}', 'Goal {a}', 'Tanjona {a}'],
    ['Reste {a}', '{a} to go', 'Sisa {a}'],
    ['Reste à réunir pour « {a} » :', 'Still to raise for “{a}”:', 'Sisa hotadiavina ho an\'ny « {a} »:'],
    ['Souhaité pour {a}', 'Target: {a}', 'Kendrena amin\'ny {a}'],
    ['Voir les {a} alertes →', 'See all {a} alerts →', 'Jereo ny fampitandremana {a} →'],
    ['au rythme actuel ({a}/mois) → {b}', 'at the current pace ({a}/month) → {b}', 'amin\'ny hafainganana ankehitriny ({a}/volana) → {b}'],
    ['Rythme actuel', 'Current pace', 'Hafainganana ankehitriny'],
    ['Épargne moyenne {a}/mois', 'Average savings {a}/month', 'Salanisan\'ny tahiry {a}/volana'],
    ['Il faut mettre {a}/mois de côté pour y arriver d\'ici {b}.', 'Put aside {a}/month to get there by {b}.', 'Tokony hatokana {a}/volana mba ho tratra amin\'ny {b}.'],
    ['Pour {a}', 'For {a}', 'Ho an\'ny {a}'],
    ['Catégorie « {a} » ajoutée ✓', 'Category “{a}” added ✓', 'Tafiditra ny sokajy « {a} » ✓'],
    ['Supprimer la catégorie « {a} » ?', 'Delete the “{a}” category?', 'Hofafana ve ny sokajy « {a} »?'],
    ['{a} opération(s) l’utilisent : elles seront affichées dans « Autre ».', '{a} entr(ies) use it: they will be shown under “Other”.', 'Asa {a} no mampiasa azy: ao amin\'ny « Hafa » no hisehoany.'],
    ['Supprimer le projet « {a} » ? Les versements restent dans l\'épargne.', 'Delete the “{a}” project? Deposits stay in savings.', 'Hofafana ve ny tetikasa « {a} »? Mijanona ao amin\'ny tahiry ny vola napetraka.'],
    ['Le compte {a} n’est pas autorisé à voir ces données.', 'The account {a} is not allowed to see this data.', 'Tsy nahazo alalana hijery ireo angona ireo ny kaonty {a}.'],
    ['Connexion impossible ({a})', 'Sign-in failed ({a})', 'Tsy afaka niditra ({a})'],
    ['Création impossible ({a})', 'Could not create account ({a})', 'Tsy voaforona ny kaonty ({a})'],
    ['Envoi impossible : {a}', 'Could not send: {a}', 'Tsy lasa: {a}'],
    ['Erreur : {a}', 'Error: {a}', 'Hadisoana: {a}'],
    ['Dépensé : {a}', 'Spent: {a}', 'Lany: {a}'],
    ['Budget : {a}', 'Budget: {a}', 'Tetibola: {a}'],
    ['Revenus : {a}', 'Income: {a}', 'Fidiram-bola: {a}'],
    ['Dépenses : {a}', 'Expenses: {a}', 'Fandaniana: {a}'],
    ['Épargne : {a}', 'Savings: {a}', 'Tahiry: {a}'],
    ['Solde : {a}', 'Balance: {a}', 'Vola sisa: {a}'],
    ['Total épargné : {a}', 'Total saved: {a}', 'Tahiry rehetra: {a}'],
    ['Ce mois : {a}', 'This month: {a}', 'Ity volana ity: {a}'],
    ['Dépensé {a} (Ar)', 'Spent {a} (Ar)', 'Lany {a} (Ar)'],
    ['{a} dépensés {b}', '{a} spent {b}', '{a} lany {b}'],
    ['Effacer toutes les données ({a}) ? Cette action est définitive. Pensez à faire une sauvegarde avant.', 'Delete all data ({a})? This cannot be undone. Make a backup first.', 'Hofafana daholo ve ny angona ({a})? Tsy azo averina io. Ataovy aloha ny fitehirizana.'],
  ];

  const MONTHS = {
    mg: ['Janoary', 'Febroary', 'Martsa', 'Aprily', 'Mey', 'Jona', 'Jolay', 'Aogositra', 'Septambra', 'Oktobra', 'Novambra', 'Desambra'],
    mgShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mey', 'Jon', 'Jol', 'Aog', 'Sep', 'Okt', 'Nov', 'Des'],
  };

  const LANGS = { fr: 'Français', mg: 'Malagasy', en: 'English' };
  let lang = 'fr';
  try { lang = localStorage.getItem('ze-lang') || 'fr'; } catch (e) {}
  if (!LANGS[lang]) lang = 'fr';

  const norm = s => s.replace(/[  ]/g, ' ').replace(/’/g, "'").replace(/\s+/g, ' ').trim();
  const idx = { en: new Map(), mg: new Map() };
  for (const [fr, en, mg] of D) { idx.en.set(norm(fr), en); idx.mg.set(norm(fr), mg); }
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pats = P.map(([fr, en, mg]) => {
    const keys = [];
    const src = '^' + esc(norm(fr)).replace(/\\\{([a-d])\\\}/g, (m, k) => { keys.push(k); return '(.+?)'; }) + '$';
    return { re: new RegExp(src), keys, en, mg, lit: norm(fr).replace(/\{[a-d]\}/g, '').length };
  }).sort((x, y) => y.lit - x.lit); // modèles les plus précis d'abord

  function tr(s, l = lang) {
    if (l === 'fr' || s == null) return s;
    const raw = String(s);
    const n = norm(raw);
    if (!n || !/[A-Za-zÀ-ÿ]/.test(n)) return raw;
    const lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    const wrap = v => lead + v + trail;
    const hit = idx[l].get(n);
    if (hit != null) return wrap(hit);
    for (const p of pats) {
      const m = n.match(p.re);
      if (m) {
        let out = p[l];
        p.keys.forEach((k, i) => { out = out.replace('{' + k + '}', tr(m[i + 1], l)); });
        return wrap(out);
      }
    }
    // Segments séparés par « · » ou « | » : traduire chaque partie
    for (const sep of [' · ', '|', ' — ']) {
      if (n.includes(sep)) return wrap(n.split(sep).map(x => tr(x, l)).join(sep));
    }
    // « Libellé : valeur »
    const kv = n.match(/^(.+?) : (.+)$/);
    if (kv && idx[l].has(kv[1])) return wrap(idx[l].get(kv[1]) + (l === 'en' ? ': ' : ': ') + tr(kv[2], l));
    // Ponctuation de début / fin
    const pm = n.match(/^([^A-Za-zÀ-ÿ]*)(.*?)([^A-Za-zÀ-ÿ)»]*)$/);
    if (pm && (pm[1] || pm[3]) && pm[2] && idx[l].has(pm[2])) return wrap(pm[1] + idx[l].get(pm[2]) + pm[3]);
    return raw;
  }

  const SKIP = 'script,style,svg,textarea,.nt';
  const ATTRS = ['placeholder', 'title', 'aria-label', 'data-tip'];
  function translateTree(root) {
    if (lang === 'fr' || !root) return;
    if (root.nodeType === 3) { const p = root.parentElement; if (p && !p.closest(SKIP)) { const v = tr(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; } return; }
    if (root.nodeType !== 1 || root.closest?.(SKIP)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n; const nodes = [];
    while ((n = w.nextNode())) nodes.push(n);
    for (const t of nodes) { if (t.parentElement?.closest(SKIP)) continue; const v = tr(t.nodeValue); if (v !== t.nodeValue) t.nodeValue = v; }
    const els = [root, ...root.querySelectorAll('[placeholder],[title],[aria-label],[data-tip]')];
    for (const e of els) for (const a of ATTRS) { const v = e.getAttribute?.(a); if (v) { const t = tr(v); if (t !== v) e.setAttribute(a, t); } }
  }
  const obs = new MutationObserver(ms => { for (const m of ms) m.addedNodes.forEach(translateTree); });

  function monthName(y, m, opt) {
    if (lang === 'mg') {
      const name = opt && opt.month === 'short' ? MONTHS.mgShort[m - 1] : MONTHS.mg[m - 1];
      return opt && opt.year ? name + ' ' + y : name;
    }
    return new Date(y, m - 1, 1).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', opt);
  }
  function dayLabel(y, m, d) {
    if (lang === 'mg') return d + ' ' + MONTHS.mgShort[m - 1] + ' ' + y;
    return new Date(y, m - 1, d).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function start() {
    document.documentElement.lang = lang === 'mg' ? 'mg' : lang;
    obs.observe(document.body, { childList: true, subtree: true });
    translateTree(document.body);
    document.title = lang === 'fr' ? 'Z&E — Notre avenir, notre projet' : 'Z&E — ' + tr('Notre avenir, notre projet');
  }
  function setLang(l) {
    if (!LANGS[l]) return;
    lang = l;
    try { localStorage.setItem('ze-lang', l); } catch (e) {}
  }

  window.ZEI18N = { tr: s => tr(s), setLang, get lang() { return lang; }, LANGS, start, monthName, dayLabel, translateTree };
})();
