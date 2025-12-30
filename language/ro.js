const ro = {
    // Dashboard
    "dashboard_title": "Panoul Tempvoice",
    "dashboard_description": "Bine ai venit în panoul tău Tempvoice — administrează și personalizează camera ta vocală.",
    "dashboard_create_link": "Vocea ta, spațiul tău. Pornește o cameră în https://discord.com/channels/{guildId}/{channelId}",
    "dashboard_footer": "Apasă butoanele de mai jos pentru a-ți gestiona camera vocală.",
    "name_desc": "Schimbă numele canalului vocal",
    "limit_desc": "Setează limita de utilizatori pentru canal",
    "privacy_desc": "Ajustează setările de confidențialitate ale canalului",
    "dnd_desc": "Comută modul Nu deranja pentru canal",
    "region_desc": "Schimbă regiunea vocală a canalului",
    "trust_desc": "Permite anumitor utilizatori să se alăture și să interacționeze în canal",
    "untrust_desc": "Retrage accesul de încredere pentru utilizatorii selectați",
    "block_desc": "Împiedică utilizatorii să vadă sau să se alăture canalului",
    "unblock_desc": "Restabilește vizibilitatea și accesul pentru utilizatorii blocați",
    "bitrate_desc": "Ajustează calitatea audio a canalului",
    "invite_desc": "Trimite o invitație utilizatorilor să se alăture canalului tău vocal",
    "kick_desc": "Îndepărtează utilizatorii selectați din canalul vocal",
    "claim_desc": "Preia proprietatea canalului dacă proprietarul a ieșit",
    "transfer_desc": "Transferă proprietatea canalului către un alt utilizator",
    "delete_desc": "Șterge canalul tău vocal temporar",
    "name": "Nume",
    "limit": "Limită",
    "privacy": "Confidențialitate",
    "dnd": "DND",
    "region": "Regiune",
    "trust": "Permite",
    "untrust": "Revocă",
    "block": "Blocare",
    "unblock": "Deblocare",
    "bitrate": "Bitrate",
    "invite": "Invită",
    "kick": "Dă afară",
    "claim": "Preia",
    "transfer": "Transferă",
    "delete": "Șterge",

    // Delete
    "deleted": "Canal șters.",
    "log_deleted": "{channel} a fost șters.",

    // DND
    "dnd_on": "Modul Nu deranja este activ. Alții se pot alătura, dar nu pot vorbi sau interacționa.",
    "dnd_off": "Modul Nu deranja este dezactivat. Alții pot vorbi și interacționa în canalul tău.",

    // Nname
    "invalid_name": "Te rugăm să introduci un nume valid.",
    "channel_renamed": "Canal redenumit în **{name}**.",
    "log_renamed": "{user} a redenumit camera în {name}",

    // Limit
    "invalid_limit": "Limita trebuie să fie între 1 și 99.",
    "limit_updated": "Limita de utilizatori a fost actualizată la {limit}.",
    "log_limit": "{user} a setat limita la {limit} în {channel}.",

    // Claim
    "already_owner": "Deja deții acest canal.",
    "owner_still_present": "Proprietarul actual este încă în canalul vocal.",
    "log_claimed": "{user} a revendicat proprietatea canalului vocal {channel}.",

    // Trust
    "trust_option": "Selectează pe cineva în care ai încredere.",
    "trust_placeholder": "Selectează un utilizator pe care să îl permiți",
    "trusted": "I-ai acordat acces lui {user}. Acum se poate alătura canalului.",
    "log_trust": "{user} a fost permis în {channel}.",

    // Untrust
    "untrust_option": "Selectează pe cineva căruia să îi retragi accesul.",
    "untrust_placeholder": "Selectează un utilizator căruia să îi retragi accesul",
    "untrusted": "I-ai retras accesul lui {user}. Nu se mai poate alătura canalului.",
    "log_untrust": "Accesul lui {user} a fost retras în {channel}.",

    // Block
    "block_option": "Selectează pe cineva de blocat.",
    "block_placeholder": "Alege un utilizator de blocat",
    "blocked": "{user} a fost blocat să vadă acest canal.",
    "log_block": "{user} a fost blocat în {channel}.",

    // Unblock
    "unblock_option": "Selectează pe cineva de deblocat.",
    "unblock_placeholder": "Alege un utilizator de deblocat",
    "unblocked": "{user} a fost deblocat și permisiunile i-au fost resetate.",
    "log_unblock": "{user} a fost deblocat în {channel}.",

    // Transfer
    "transfer_option": "Selectează pe cineva către care să transferi proprietatea.",
    "transfer_placeholder": "Alege un nou proprietar al canalului",
    "no_user_to_transfer": "Nu este nimeni în canal către care să transferi proprietatea.",
    "log_transfer": "{user} a preluat proprietatea lui {channel}.",

    // Kick
    "kick_option": "Selectează pe cineva de dat afară.",
    "kick_placeholder": "Alege un utilizator de dat afară",
    "user_not_found": "Utilizatorul nu a fost găsit în canal.",
    "no_user_to_kick": "Nu este nimeni de dat afară.",
    "log_kick": "{user} a fost dat afară din {channel}.",

    // Region
    "region_option": "Alege o regiune vocală.",
    "region_placeholder": "Selectează o regiune",
    "region_updated": "Regiunea a fost schimbată la {region}.",
    "error_region": "A apărut o eroare la actualizarea regiunii.",
    "log_region": "{user} a schimbat regiunea la {region} în {channel}.",

    // Bitrate
    "bitrate_option": "Alege un bitrate.",
    "bitrate_placeholder": "Selectează un bitrate",
    "bitrate_updated": "Bitrate setat la {bitrate} kbps.",
    "error_bitrate": "A apărut o eroare la actualizarea bitrate-ului.",
    "log_bitrate": "{user} a schimbat bitrate-ul la {bitrate} kbps în {channel}.",

    // Invite
    "invite_option": "Selectează pe cineva de invitat.",
    "invite_placeholder": "Invită pe cineva în canalul tău vocal",
    "invite_message": "Ai fost invitat să te alături unui canal vocal: {name}\n{voiceLink}",
    "invited_user": "{user} a fost invitat.",
    "error_send_invite": "Nu am putut trimite invitația utilizatorului.",
    "error_user_dms_closed": "Nu se poate trimite un mesaj privat acestui utilizator. Este posibil să aibă mesajele private dezactivate sau să fie un bot.",
    "log_invite": "{user} a fost invitat în {channel}.",

    // Privacy
    "privacy_option": "Setează confidențialitatea — fă-l public sau privat.",
    "privacy_placeholder": "Selectează o opțiune de confidențialitate",
    "privacy_lock_label": "Blochează",
    "privacy_lock_desc": "Numai utilizatorii permisi se pot alătura",
    "privacy_lock": "Canal blocat. Numai utilizatorii permisi se pot alătura.",
    "privacy_unlock_label": "Deblochează",
    "privacy_unlock_desc": "Oricine se poate alătura canalului tău vocal",
    "privacy_unlock": "Canal deblocat. Toată lumea se poate alătura.",
    "privacy_invisible_label": "Invizibil",
    "privacy_invisible_desc": "Numai utilizatorii permisi pot vedea canalul tău vocal",
    "privacy_invisible": "Canalul este acum invizibil pentru ceilalți.",
    "privacy_visible_label": "Vizibil",
    "privacy_visible_desc": "Toată lumea poate vedea canalul tău vocal",
    "privacy_visible": "Canalul este acum vizibil pentru toată lumea.",
    "privacy_closechat_label": "Închide chatul",
    "privacy_closechat_desc": "Numai utilizatorii permisi pot conversa",
    "privacy_closechat": "Chatul este închis. Doar tu și utilizatorii permisi puteți conversa.",
    "privacy_openchat_label": "Deschide chatul",
    "privacy_openchat_desc": "Oricine poate trimite mesaje",
    "privacy_openchat": "Chatul este deschis pentru toată lumea.",
    "log_privacy": "{user} a schimbat confidențialitatea la {value} în {channel}.",

    // Voice State Update
    "log_left": "{user} a părăsit {channel}.",
    "log_joined": "{user} s-a alăturat {channel}.",
    "log_switched": "{user} a schimbat de la {from} la {to}.",
    "log_channel_already_deleted": "{channel} era deja șters.",
    "log_channel_delete_failed": "Nu s-a putut șterge {channel}.",

    // General messages
    "not_owner": "Nu ești proprietarul acestui canal vocal.",
    "invalid_user": "Utilizator invalid. Încearcă din nou.",
    "not_in_channel": "Nu ești într-un canal vocal.",
    "different_channel": "Nu poți folosi această funcție în acest canal vocal.",
    "permissions_updated": "{user} a actualizat permisiunile în {channel}.",
    "log_send_failed": "Nu s-a putut trimite mesajul de jurnal: {error}",
    "missing_lang_key": "Cheie de traducere lipsă: {key}",
    "failed_load_modal": "Nu s-a putut încărca modalul: {file}",
    "interaction_timeout": "Interacțiunea a expirat din cauza inactivității.",
    "error_interaction": "A apărut o problemă. Te rugăm să încerci din nou mai târziu.",
    "interaction_already_active": "Există deja o interacțiune activă. Te rugăm să o finalizezi înainte de a începe una nouă.",
    "invalid_category": "CATEGORY_CHANNEL_ID este invalid sau nu este un canal de tip categorie.",
    "invalid_embed": "EMBED_CHANNEL_ID este invalid sau nu este un canal text.",
    "invalid_voice": "VOICE_CHANNEL_ID este invalid sau nu este un canal vocal."
}

export default ro
