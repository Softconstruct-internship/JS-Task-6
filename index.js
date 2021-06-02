function League(...teams) {
    this.teams = teams;
    this.bestScorer = this.getBestScorer();
    this.averageGoals = this.getAverageGoals();
}
League.prototype.getBestScorer = function () {
    let bestScorer = this.teams[0].bestScorer;
    this.teams.map(team => {
        (team.bestScorer.goals > bestScorer.goals) ?
            bestScorer = team.bestScorer : undefined

    })
    return bestScorer
}
League.prototype.getAverageGoals = function () {
    let sum = 0;
    this.teams.map(team => {
        sum += team.averageGoals
    })
    return +(sum / this.teams.length).toFixed(2)
}

function Team(name, matches, wins, loses, scored, conceded, players) {
    this.name = name;
    this.matches = matches;
    this.wins = wins;
    this.loses = loses;
    this.draws = this.matches - this.wins - this.loses;
    this.scored = scored;
    this.conceded = conceded;
    this.goaldifference = this.scored - this.conceded;
    this.points = (this.wins * 3) + this.draws;
    this.players = players;
    this.bestScorer = this.getBestScorer();
    this.averageGoals = this.getAverageGoals();
    this.goalkeepers = this.getAllGoalkeepers();
}

Team.prototype.getBestScorer = function () {
    let bestScorer = this.players[0];
    this.players.map(player => {
        (player.goals > bestScorer.goals) ? bestScorer = player : undefined

    })
    return bestScorer;
}

Team.prototype.getAverageGoals = function () {
    return +(this.scored / this.matches).toFixed(1)
}

Team.prototype.getAllGoalkeepers = function () {
    let goalie = [];
    this.players.map(player => {
        player.position === 'goalkeeper' ? goalie.push(player) : undefined

    })
    return goalie
}
function Player(name, number, birthYear, position, country, matches, goals, yellowCards, redCards) {
    this.name = name;
    this.number = number;
    this.age = 2021 - birthYear;
    this.position = position;
    this.country = country;
    this.matches = matches;
    this.goals = goals;
    this.yellowCards = yellowCards;
    this.redCards = redCards
}

// Man City Players
let ederson = new Player('Эдерсон', 31, 1993, 'goalkeeper', 'brazil', 36, 0, 3, 0);
let steffen = new Player('Зак Стеффен', 13, 1995, 'goalkeeper', 'usa', 1, 0, 0, 0);
let stones = new Player('Джон Стоунз', 5, 1994, 'defender', 'england', 22, 4, 0, 1);
let walker = new Player('Кайл Уокер', 2, 1990, 'defender', 'england', 24, 1, 1, 0);
let dias = new Player('Рубен Диаш', 3, 1997, 'defender', 'portugal', 32, 1, 4, 0);
let cancelo = new Player('Жоау Канселу', 27, 1994, 'defender', 'portugal', 28, 2, 5, 1);
let laporte = new Player('Эмерик Ляпорт', 14, 1994, 'defender', 'spain', 16, 0, 1, 0);
let gundogan = new Player('Илкай Гюндоган', 8, 1990, 'middlefielder', 'germany', 28, 13, 1, 0);
let rodri = new Player('Родри', 16, 1996, 'middlefielder', 'spain', 34, 2, 6, 0);
let kevin = new Player('Кевин де Брейне', 17, 1996, 'middlefielder', 'belgium', 25, 6, 1, 0);
let bernardo = new Player('Бернарду Силва', 20, 1994, 'middlefielder', 'portugal', 26, 2, 5, 0);
let fernandinho = new Player('Фернандиньо', 25, 1985, 'middlefielder', 'brazil', 21, 0, 6, 0);
let mahrez = new Player('Фернандиньо', 26, 1991, 'middlefielder', 'algeria', 27, 9, 0, 0);
let foden = new Player('Фил Фоден', 47, 2000, 'middlefielder', 'england', 28, 9, 0, 0);
let sterling = new Player('Рахим Стерлинг', 7, 1994, 'striker', 'england', 31, 10, 4, 0);
let aguero = new Player('Серхио Агуэро', 10, 1988, 'striker', 'argentina', 12, 4, 0, 0);
let jesus = new Player('Габриэл Жезус', 9, 1997, 'striker', 'brazil', 29, 9, 2, 0);

let cityPlayers = [
    ederson, steffen, stones, walker, dias, cancelo, laporte, gundogan, rodri, kevin, bernardo,
    fernandinho, mahrez, foden, sterling, aguero, jesus
]
// console.log(cityPlayers)

// Man United Players
let david = new Player('Давид Де Хеа', 1, 1990, 'goalkeeper', 'spain', 26, 0, 0, 0);
let hendersonDean = new Player('Дин Хендерсон', 26, 1997, 'goalkeeper', 'england', 13, 0, 3, 0);
let maguire = new Player('Гарри Магуайр', 5, 1993, 'defender', 'england', 34, 2, 10, 0);
let victor = new Player('Виктор Линделёф', 2, 1994, 'defender', 'sweden', 29, 1, 0, 0);
let bailly = new Player('Эрик Бейи', 3, 1994, 'defender', 'cote ivoire', 12, 0, 3, 0);
let shaw = new Player('Люк Шоу', 23, 1995, 'defender', 'england', 32, 1, 8, 0);
let aaron = new Player('Аарон Ван-Биссака', 23, 1997, 'defender', 'england', 34, 2, 3, 0);
let pogba = new Player('Поль Погба', 6, 1993, 'middlefielder', 'france', 26, 3, 3, 0);
let bruno = new Player('Бруну Фернандеш', 18, 1994, 'middlefielder', 'portugal', 37, 18, 6, 0);
let matic = new Player('Неманья Матич', 31, 1988, 'middlefielder', 'serbia', 20, 0, 2, 0);
let fred = new Player('Фред', 17, 1993, 'middlefielder', 'brazil', 30, 1, 5, 0);
let mata = new Player('Хуан Мата', 8, 1988, 'middlefielder', 'spain', 9, 1, 0, 0);
let rashford = new Player('Маркус Рэшфорд', 10, 1997, 'striker', 'england', 37, 11, 4, 0);
let cavani = new Player('Эдинсон Кавани', 7, 1987, 'striker', 'uruguay', 26, 10, 5, 0);
let martial = new Player('Антони Марcьяль', 9, 1995, 'striker', 'france', 22, 4, 0, 1);
let greenwood = new Player('Мейсон Гринвуд', 11, 2001, 'striker', 'england', 31, 7, 2, 0);

let unitedPlayers = [
    david, hendersonDean, maguire, victor, bailly, shaw, aaron, pogba, bruno, matic, fred, mata,
    rashford, cavani, martial, greenwood
]
// console.log(unitedPlayers)

// Liverpool Players
let allison = new Player('Алиссон', 1, 1992, 'goalkeeper', 'brazil', 33, 1, 1, 0);
let adrian = new Player('Адриан', 13, 1987, 'goalkeeper', 'spain', 3, 0, 0, 0);
let virgil = new Player('Вирджил ван Дейк', 4, 1991, 'defender', 'nederlands', 5, 1, 1, 0);
let robertson = new Player('Эндрю Робертсон', 26, 1994, 'defender', 'scotland', 38, 1, 2, 0);
let gomez = new Player('Джо Гомес', 12, 1997, 'defender', 'england', 7, 0, 0, 0);
let arnold = new Player('Трент Александер-Арнольд', 66, 1998, 'defender', 'england', 36, 2, 2, 0);
let matip = new Player('Жоэль Матип', 32, 1991, 'defender', 'cameroon', 10, 1, 2, 0);
let henderson = new Player('Джордан Хендерсон', 14, 1990, 'middlefielder', 'england', 21, 1, 0, 0);
let thiago = new Player('Тьяго Алькантара', 6, 1990, 'middlefielder', 'spain', 24, 1, 4, 0);
let fabinho = new Player('Фабиньо', 3, 1993, 'middlefielder', 'brazil', 30, 0, 6, 0);
let milner = new Player('Джеймс Милнер', 7, 1986, 'middlefielder', 'england', 26, 0, 3, 0);
let salah = new Player('Мохамед Салах', 11, 1992, 'striker', 'egypt', 37, 22, 0, 0);
let mane = new Player('Садио Мане', 10, 1992, 'striker', 'senegal', 35, 11, 3, 0);
let firmino = new Player('Роберто Фирмино', 9, 1991, 'striker', 'brazil', 36, 9, 2, 0);

let liverpoolPlayers = [
    allison, adrian, virgil, robertson, gomez, arnold, matip, henderson, thiago, fabinho,
    milner, salah, mane, firmino
]
// console.log(liverpoolPlayers)

// Chelsea Players
let kepa = new Player('Кепа', 1, 1994, 'goalkeeper', 'spain', 7, 0, 1, 0);
let willy = new Player('Вилли Кабальеро', 13, 1980, 'goalkeeper', 'argentina', 1, 0, 0, 0);
let mendy = new Player('Эдуард Менди', 16, 1992, 'goalkeeper', 'senegal', 31, 0, 2, 0);
let rudiger = new Player('Антонио Рюдигер', 2, 1993, 'defender', 'germany', 19, 1, 0, 0);
let alonso = new Player('Маркос Алонсо', 3, 1990, 'defender', 'spain', 13, 2, 2, 0);
let andreas = new Player('Андреас Кристенсен', 4, 1996, 'defender', 'denmark', 17, 0, 2, 1);
let silva = new Player('Тиаго Силва', 6, 1984, 'defender', 'brazil', 23, 2, 3, 1);
let kurt = new Player('Курт Зума', 15, 1994, 'defender', 'france', 24, 5, 3, 0);
let chilwell = new Player('Бен Чилуэлл', 21, 1996, 'defender', 'england', 27, 3, 3, 0);
let james = new Player('Рис Джеймс', 24, 1999, 'defender', 'england', 32, 1, 3, 0);
let cesar = new Player('Сесар Аспиликуэта', 28, 1989, 'defender', 'spain', 26, 1, 5, 1);
let kante = new Player('Нголо Канте', 7, 1991, 'middlefielder', 'france', 30, 0, 7, 1);
let jorginho = new Player('Жоржиньо', 5, 1991, 'middlefielder', 'italy', 28, 7, 2, 0);
let pulisic = new Player('Кристиан Пулишич', 10, 1998, 'middlefielder', 'usa', 27, 4, 2, 0);
let kovacic = new Player('Матео Ковачич', 17, 1994, 'middlefielder', 'croatia', 27, 0, 4, 0);
let mount = new Player('Мейсон Маунт', 19, 1999, 'middlefielder', 'england', 36, 6, 2, 0);
let havertz = new Player('Кай Хаверц', 29, 1999, 'middlefielder', 'germany', 27, 4, 2, 0);
let giroud = new Player('Оливье Жиру', 18, 1986, 'striker', 'france', 17, 4, 1, 0);
let werner = new Player('Тимо Вернер', 11, 1996, 'striker', 'germany', 35, 6, 2, 0);

let chelseaPlayers = [
    kepa, willy, mendy, rudiger, alonso, andreas, silva, kurt, chilwell,
    james, cesar, kante, jorginho, pulisic, kovacic, mount, havertz, giroud, werner
];
// console.log(chelseaPlayers)

// Teams

let city = new Team('Манчестер Сити', 38, 27, 6, 83, 32, cityPlayers);
let united = new Team('Манчестер Юнайтед', 38, 21, 6, 73, 44, unitedPlayers);
let liverpool = new Team('Ливерпуль', 38, 20, 9, 68, 42, liverpoolPlayers);
let chelsea = new Team('Челси', 38, 19, 9, 58, 36, chelseaPlayers);

// Leagues
let england = new League(city, united, liverpool, chelsea);


const leages = {
    england: england
}

console.log(england.bestScorer)
console.log(chelsea.bestScorer)
console.log(city.goalkeepers)
console.log(city.bestScorer)
console.log(liverpool.goalkeepers)




