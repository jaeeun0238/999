// 1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
// 2. 캐릭터 클래스는 아래 조건을 만족해야 합니다:
//     1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
//     2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
//     3. heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//            hp는 10~20의 랜덤값
//     4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.
// 3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
// 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요.

class GameCharacter {
  constructor(name, level, hp, damage) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.damage = damage;
  }
  attack() {
    console.log(`${this.name}(이)가 공격을 시도합니다!`);
  }
  heal() {
    const randomHeal = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    console.log(`${this.name}의 체력이${randomHeal}만큼 회복되었습니다.`);
  }
  levelUp() {
    const additionalStat = 10;
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      this.hp += additionalStat;
    } else {
      this.damage += additionalStat;
    }
  }
}

const myCharacter = new GameCharacter('뱀', 1, 100, 5);
console.log('내 캐릭터는', myCharacter);
myCharacter.attack();
myCharacter.heal();
