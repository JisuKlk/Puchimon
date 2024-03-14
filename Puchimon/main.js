// #region Imports --- Aquí tenemos los imports de las clases/funciones que queremos traer aquí ヾ(•ω•`)o
import Move from "./Move.js";
import Pokemon from "./Pokemon.js";
import PowerUp from "./PowerUp.js";
import { d6, d3, d2 } from "./Dice.js";
// #endregion

// #region Pokemon instances --- Instanciamos los pokemons \(￣︶￣*\))
const snom = new Pokemon("Snom", 30, 25, 35, 45, 30, 20, "2", 33);
const megaMewtwoY = new Pokemon("Mega-Mewtwo Y", 106, 150, 70, 194, 120, 140, "2", 33);
const megaCharizardX = new Pokemon("Mega-Charizard X", 78, 130, 111, 130, 85, 100, "2", 33);
const sunkern = new Pokemon("Sunkern", 30, 30, 30, 30, 30, 30, "1", 2);
const megaMewtwoX = new Pokemon("Mega-Mewtwo X", 106, 190, 100, 154, 100, 130, "1", 2);
const greninjaAsh = new Pokemon("Greninja-Ash", 72, 145, 67, 153, 71, 132, "1", 2);
// #endregion

// #region Moveset instances --- Ahora los movimientos （￣︶￣）↗　
// #region bodySlam --- Ataque físico
const bodySlam = new Move("Body Slam", "The user drops onto the target with its full body weight", function (OffensivePokemon, DefensivePokemon) {
    let damage = OffensivePokemon.Atk - DefensivePokemon.Def;
    return damage;
});
// #endregion
// #region flamethrower data --- Ataque especial
const flamethrower = new Move("Flamethrower", "The target is scorched with an intense blast of fire", function (OffensivePokemon, DefensivePokemon) {
    let damage = (OffensivePokemon.Atk + OffensivePokemon.SpA) - (DefensivePokemon.Def - DefensivePokemon.SpD);
    return damage
});
// #endregion
// #region suckerPunch data --- Ataque basado en velocidad
const suckerPunch = new Move("Sucker Punch", "This move enables the user to attack first", function (OffensivePokemon, DefensivePokemon) {
    let damage = (OffensivePokemon.Atk + OffensivePokemon.Spe) - (DefensivePokemon.Def - DefensivePokemon.Spe);
    return damage
});
// #endregion
// #endregion

// #region PowerUp instances --- Y por último los power-ups o(*^＠^*)o

// PowerUp que mejora la defensa
const cottonGuard = new PowerUp("Cotton guard", "The user protects itself by wrapping its body in soft cotton, drastically raising the user's Defense stat.", "Def", 80);

// PowerUp que mejora el ataque
const swordsDance = new PowerUp("Sword's dance", "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.", "Atk", 10);

// PowerUp que mejora la velocidad
const doubleTeam = new PowerUp("Double team", "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.", "Spe", 10);

// PowerUp que baja el ataque
const intimidate = new PowerUp("Intimidate", "Lowers the Physical Attack power of attackers.", "Atk", -30);

// PowerUp que mejora la velocidad
const ironDefense = new PowerUp("Iron defense", "The user hardens its body's surface like iron, sharply raising its Special Defense stat.", "SpD", 80);

// El verdadero PowerUp, que literalmente no hace nada
const waterSprout = new PowerUp("Water sprout", "NO HACE LITERALMENTE NADA", "Nothing", 0);

// #endregion

// #region Battle --- Función con la batalla especifica `(*>﹏<*)′
function battle(nameOffensivePlayer, nameDeffensivePlayer, OffensivePokemon, DeffensivePokemon) {

    // #region Movimientos, PowerUps y el verdadero xokas (✿◡‿◡)
    let elxokas;
    let allPowerUps = [elxokas, cottonGuard, swordsDance, doubleTeam, intimidate, ironDefense, waterSprout];
    let allMoves = [elxokas, flamethrower, bodySlam, suckerPunch];
    // #endregion

    // #region Variables --- Declaramos las variables que vamos a usar, entre ellas, el resultado de los dados y los movimientos que usamos （*＾-＾*）
    let rollDice6 = d6();
    let chosenPowerUp = allPowerUps[rollDice6];

    let rollDice3 = d3();
    let chosenMove = allMoves[rollDice3];
    // #endregion

    // #region Battle --- Printamos por pantalla la batalla (≧∇≦)ﾉ
    console.log("Atacant (JX = " + nameOffensivePlayer + ", PX = " + OffensivePokemon.id + ", D1 = " + chosenPowerUp.id + ", D2 = "
        + chosenMove.id + " ,H = " + OffensivePokemon.HP + ", A = " + OffensivePokemon.Atk + ", D = " + OffensivePokemon.Def + ", AE = "
        + OffensivePokemon.SpA + ", DE = " + OffensivePokemon.SpD + ", V = " + OffensivePokemon.Spe + ")");

    console.log("Defensor (JX = " + nameDeffensivePlayer + ", PX = " + DeffensivePokemon.id + ", D1 = NULL" + ", D2 = NULL"
        + " ,H = " + DeffensivePokemon.HP + ", A = " + DeffensivePokemon.Atk + ", D = " + DeffensivePokemon.Def + ", AE = "
        + DeffensivePokemon.SpA + ", DE = " + DeffensivePokemon.SpD + ", V = " + DeffensivePokemon.Spe + ")");

    console.log("Se le aplica un buff/debuff a " + OffensivePokemon.id + " de " + chosenPowerUp.value + " a " + chosenPowerUp.stat);
    // #endregion

    // #region Switch case -- Usamos un switch case al cual enviamos el power-up y así cambiar las stats del pokemon (._.`)
    switch (chosenPowerUp.stat) {
        case "Hp":
            OffensivePokemon.HP += chosenPowerUp.value;
            break;

        case "Atk":
            OffensivePokemon.Atk += chosenPowerUp.value;
            break;

        case "Def":
            OffensivePokemon.Def += chosenPowerUp.value;
            break;

        case "SpA":
            OffensivePokemon.Sp += chosenPowerUp.value;
            break;

        case "SpD":
            OffensivePokemon.SpD += chosenPowerUp.value;
            break;

        case "Spe":
            OffensivePokemon.Spe += chosenPowerUp.value;
            break;

        case "Nothing":
            console.log("jeje no hace na'");
            break;

        default:
            break;
    }
    // #endregion

    // Sacamos la formula secreta del movimiento ultrapoderoso ψ(._. )>
    let damageDealt = chosenMove.effect(OffensivePokemon, DeffensivePokemon);
    console.log(OffensivePokemon.id + " le atacará con " + chosenMove.id + " a " + DeffensivePokemon.id + " y le aplicará o le será aplicado " + damageDealt);

    // #region Damage --- Y le calculamos el daño y lo aplicamos con todo el ki (　o=^•ェ•)o　┏━┓
    if (damageDealt > 0) {
        DeffensivePokemon.HP -= damageDealt;
    } else {
        OffensivePokemon.HP += damageDealt;
    }
    // #endregion

    // #region Print --- Mostramos todo lo que está sucediendo; el pokemon elegido, el movimiento, el powerup y las stats o((>ω< ))o
    console.log("Atacant (JX = " + nameOffensivePlayer + ", PX = " + OffensivePokemon.id + ", D1 = " + chosenPowerUp.id + ", D2 = "
        + chosenMove.id + " ,H = " + OffensivePokemon.HP + ", A = " + OffensivePokemon.Atk + ", D = " + OffensivePokemon.Def + ", AE = "
        + OffensivePokemon.SpA + ", DE = " + OffensivePokemon.SpD + ", V = " + OffensivePokemon.Spe + ")");

    console.log("Defensor (JX = " + nameDeffensivePlayer + ", PX = " + DeffensivePokemon.id + ", D1 = NULL" + ", D2 = NULL"
        + " ,H = " + DeffensivePokemon.HP + ", A = " + DeffensivePokemon.Atk + ", D = " + DeffensivePokemon.Def + ", AE = "
        + DeffensivePokemon.SpA + ", DE = " + DeffensivePokemon.SpD + ", V = " + DeffensivePokemon.Spe + ")");
    // #endregion
}
// #endregion

// #region Game --- Función con la partida completa ...(*￣０￣)ノ
function game() {

    // #region Variables --- Las variables que usamos, incluyendo jugadores, pokemons, nuestros nombres, al gran xokas, resultados y rondas.
    let elXokas;
    let player1 = [elXokas, sunkern, greninjaAsh, megaMewtwoX];
    let player2 = [elXokas, megaCharizardX, megaMewtwoY, snom];
    let namePlayer1 = "Ayman";
    let namePlayer2 = "Alvaro";
    let Player1Dice3;
    let Player2Dice3;
    let randomStart = d2(); // Aquí elegimos quien empieza el combate
    let contRounds = 0;
    let maxRounds = Number.MAX_VALUE;  // En caso de que se nos vaya de las manos y se convierta en una batalla con rondas infinitas, esto parará el programa evitando el colapso del ordenador.
    // #endregion

    // #region Bucle for --- Este bucle for contiene va contando las rondas y se acaba cuando uno de los jugadores fallece {{{(>_<)}}}
    for (let index = 0; index < maxRounds; index++) {

        // #region Dados --- Tiramos los dados y guardamos el resultado ⊙.☉
        Player1Dice3 = d3();
        Player2Dice3 = d3();
        // #endregion

        // #region Turnos --- Comenzamos un turno de cada jugador, se pegan, SE PEGAAAAN (*≧ω≦*)
        if ((player1[Player1Dice3].HP >= 0) && (player2[Player2Dice3].HP >= 0)) {
            contRounds += 1;  // Sumamos una ronda al contador que utilizamos para indicar en que ronda estamos
            randomStart = !randomStart; // Una vez el jugador ataca, revertimos el booleano y por tanto el dado para que el otro jugador sea el siguiente en atacar
            if (randomStart === true) {
                console.log("━-━≫---≪━-━\n\n--Round " + contRounds + "--\n\n╬━━❪ _ ❫━━╬");
                battle(namePlayer1, namePlayer2, player1[Player1Dice3], player2[Player2Dice3]);
            } else if (randomStart === false) {
                console.log("━-━≫---≪━-━\n\n--Round " + contRounds + "--\n\n╬━━❪ _ ❫━━╬");
                battle(namePlayer2, namePlayer1, player2[Player2Dice3], player1[Player1Dice3]);
            }
            if ((player1[Player1Dice3].HP <= 0)) {
                console.log("Murió, " + player1[Player1Dice3].id + " falleció, está muerto, no volverá, es el fin, ES EL FIN! NO ESTÁ VIVO, VIVON'T");
            }
            if ((player2[Player2Dice3].HP <= 0)) {
                console.log("Murió, " + player2[Player2Dice3].id + " falleció, está muerto, no volverá, es el fin, ES EL FIN! NO ESTÁ VIVO, VIVON'T");
            }
        }
        // #endregion

        // #region If --- Si alguno de los dos Pokémon ha perdido, termina el juego
        if (sunkern.HP <= 0 && greninjaAsh.HP <= 0 && megaMewtwoX.HP <= 0) {
            console.log("\n\nY se corona como ganador: " + namePlayer2);
            break;
        } else if (megaCharizardX.HP <= 0 && megaMewtwoY.HP <= 0 && snom.HP <= 0) {
            console.log("\n\nY se corona como ganador: " + namePlayer1);
            break;
        }
        // #endregion
    }
    console.log("\n\nEquipo del jugador 1 tras el combate:");
    for (let index = 1; index < player1.length; index++) {
        console.log("Pokemon número " + index + ": " + player1[index].id + "\nVida: " + player1[index].HP);
        if (player1[index].HP <= 0) {
            console.log(player1[index].id + " está KO.");
        }
    }
    console.log("\n\nEquipo del jugador 2 tras el combate:")
    for (let index = 1; index < player2.length; index++) {
        console.log("Pokemon número " + index + ": " + player2[index].id + "\nVida: " + player2[index].HP);
        if (player2[index].HP <= 0) {
            console.log(player2[index].id + " está KO.");
        }
    }
    // #endregion
}
// Exportamos la función para poder llamarla desde el HTML
export { game };
// #endregion