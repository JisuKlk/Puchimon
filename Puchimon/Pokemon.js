// #region Pokemons
// Tenemos el constructor de la clase 'pokemon', que son los pokemons que usamos
export default class Pokemon {
    constructor(id, HP, Atk, Def, SpA, SpD, Spe, idteam, idlogros) {
        this.id = id;
        this.HP = HP;
        this.Atk = Atk;
        this.Def = Def;
        this.SpA = SpA;
        this.SpD = SpD;
        this.Spe = Spe;
        this.idteam = idteam;
        this.idlogros = idlogros;
    }
}
// #endregion