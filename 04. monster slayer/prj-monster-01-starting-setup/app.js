function getRandomDamage(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      player: 100,
      monster: 100,
      round: 0,
      winner: null,
      logs: [],
    };
  },
  watch: {
    monster(value) {
      if (value <= 0 && this.player <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      } else if (this.player <= 0) {
        this.winner = "monster";
      }
    },
  },
  computed: {
    monsterHealthbarStyle() {
      if (this.monster > 100) this.monster = 100;
      if (this.monster < 1) this.monster = 0;
      return { width: this.monster + "%" };
    },
    playerHealthbarStyle() {
      if (this.player > 100) this.player = 100;
      if (this.player < 1) this.player = 0;
      return { width: this.player + "%" };
    },
    specialDisabled() {
      return this.round === 0 || this.round % 3 !== 0;
    },
    healDisabled() {
      return this.round === 0 || this.round % 5 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.round++;
      const value = getRandomDamage(4, 6);
      this.monster -= value;
      this.addLog("Player", "attack", value);
      if (this.monster < 1) {
        this.monster = 0;
      } else this.attackPlayer();
    },
    attackPlayer() {
      const value = getRandomDamage(6, 10);
      this.player -= value;
      this.addLog("Monster", "attack", value);
      if (this.player < 1) this.player = 0;
    },
    specialAttackMonster() {
      this.round++;
      const value = getRandomDamage(8, 12);
      this.monster -= value;
      this.addLog("Player", "attack", value);
      if (this.monster < 1) this.monster = 0;
      this.attackPlayer();
    },
    heal() {
      this.round++;
      const value = getRandomDamage(12, 18);
      this.player += value;
      this.addLog("Player", "heal", value);
      this.attackPlayer();
    },
    surrender() {
      this.player = 0;
      this.monster = 100;
    },
    addLog(actionBy, actionType, actionValue) {
      this.logs.unshift({
        actionBy,
        actionType,
        actionValue,
      });
    },
    newGame() {
      this.player = 100;
      this.monster = 100;
      this.winner = null;
      this.round = 0;
      this.logs = [];
    },
  },
});

app.mount("#game");
