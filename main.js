function scroll(){
    document.getElementsByClassName("chatbox")[0].scrollTo(0, document.getElementsByClassName("chatbox")[0].scrollHeight);
}

function discu(nb){
    var discus = document.querySelectorAll(".discussions div");
    for(i = 0; i < discus.length; i++){
        if(i == nb-1) discus[i].classList.add("actual_discu");
        else discus[i].classList.remove("actual_discu");
    }
    switch(nb){
        case 1:
            document.getElementsByClassName("chatbox")[0].innerHTML = `<div class="message">
            <div>
                Bienvenue à tous sur le nouvel Intra-IUT ! 🤗
            </div>
            <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:05</span><span> - </span><span class="prof">Christine Makssoud</span></p></div>
            </div>

            <div class="message">
                <div>
                    Bonjour à tous 💀
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:07</span><span> - </span><span class="prof">Alain Casali</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Bonjourrr !
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:08</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    Salut ! J'ai une déjà question, pour la SAE 1.04, comment faut-il prendre en compte les ventes flash ?
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:15</span><span> - </span><span>Hugo Valente</span></p></div>
            </div>

            <div class="message">
                <div>
                    Les ventes flash sont des produits soldés avec une réduction supplémentaire.
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:26</span><span> - </span><span class="prof">Lotfi Lakhal</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Bouhhh moi j'avais déjà compris
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:27</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    Eh qui veut jouer aux échecs avec le meilleur jouer du monde ??
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:31</span><span> - </span><span>Mehdi Sebbak</span></p></div>
            </div>

            <div class="message">
                <div>
                    Pire délégué...........
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 09:35</span><span> - </span><span>Quentin Fournier</span></p></div>
            </div>

            <div class="message">
                <div>
                    D'ailleurs, changement de programme, SAE 1.07 de C++, vous devez faire un FPS dans le terminal fonctionnel en ligne à rendre dans 2 jours à 12:00 maximum sous le format TD_XX_YYYY_AA_BB-CC_SSS_GPP_R_ZZZ.zip.
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:12</span><span> - </span><span class="prof">Alain Casali</span></p></div>
            </div>

            <div class="message">
                <div>
                    Mais on n'a que 2 jours pour faire la SAE ????
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:13</span><span> - </span><span>Dorian Lacombe</span></p></div>
            </div>

            <div class="message">
                <div>
                    Et c'est quoi le format ?? ça correspond à quoi toutes les lettres svp ??
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:14</span><span> - </span><span>Elien Curt</span></p></div>
            </div>

            <div class="message">
                <div>
                    Comment on est censé faire un FPS dans un terminal en plus ?? 😭
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:16</span><span> - </span><span>Simon Daubrege</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Pareil, j'ai rien compris là
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:17</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    Same
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:17</span><span> - </span><span>Ewan El Kihal</span></p></div>
            </div>

            <div class="message">
                <div>
                    Pareillement
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:17</span><span> - </span><span>Youssef El Almoussi</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Oskour
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:18</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    Et au fait, vous aurez droit à une blague pour 1 point bonus. Par contre, chaque lettre identique à la blague d'un autre groupe => -2 pts. Pas de plagiat.<br>La note est un int et peut donc être négative 😉
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:31</span><span> - </span><span class="prof">Alain Casali</span></p></div>
            </div>

            <div class="message">
                <div>
                    Et nos questions monsieur ??
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:35</span><span> - </span><span>Mehdi Sebbak</span></p></div>
            </div>

            <div class="message">
                <div>
                    Pas compris
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:53</span><span> - </span><span class="prof">Alain Casali</span></p></div>
            </div>

            <div class="message">
                <div>
                    C'est quoi un FPS ?
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 10:59</span><span> - </span><span>Maxime Douchy</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Cherche sur Google.............
                </div>
                <div class="text"><div class="triangle"></div><p><span>17/01/2024 11:06</span><span> - </span><span>Allan Egea</span></p></div>
            </div>`;
            break;
        case 2:
            document.getElementsByClassName("chatbox")[0].innerHTML = `<div class="message">
            <div>
                Dis Allan, tu sais ce qu'il faut faire pour la nouvelle SAE ? J'ai rien compris...
            </div>
            <div class="text"><div class="triangle"></div><p><span>18/01/2024 07:01</span><span> - </span><span>Hugo Valente</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Ouah tu te réveilles super tôt
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 11:22</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Du coup non j'ai rien compris non plus, je vais aller demander à monsieur Casali
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 11:22</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    D'accord merci beaucoup !
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 11:31</span><span> - </span><span>Hugo Valente</span></p></div>
            </div>`;
            break;
        case 3:
            document.getElementsByClassName("chatbox")[0].innerHTML = `
            <div class="message self_message">
                <div>
                    Bonjour monsieur, désolé de vous déranger mais on ne comprend vraiment rien à la nouvelle SAE.. tout le monde est perdu là
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 11:36</span><span> - </span><span>Allan Egea</span></p></div>
            </div>

            <div class="message">
                <div>
                    Bonjour Allan. Tant pis pour vous, ça fait partie du job de comprendre les consignes.
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 12:55</span><span> - </span><span class="prof">Alain Casali</span></p></div>
            </div>

            <div class="message self_message">
                <div>
                    Ah 😭
                </div>
                <div class="text"><div class="triangle"></div><p><span>18/01/2024 12:57</span><span> - </span><span>Allan Egea</span></p></div>
            </div>`;
            break;
    }
    scroll();
}