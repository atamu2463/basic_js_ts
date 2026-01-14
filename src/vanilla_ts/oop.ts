/*
演習問題1：RPGの戦闘システムを設計せよ
*/

interface Healer {
    heal(target: Character): void;
}

abstract class Character {

    static characterCount: number = 0;

    constructor(
        public readonly name: string,
        protected _hp: number
    ) {
        Character.characterCount++;
    };

    abstract attack(target: Character): void;

    isAlive(): boolean {
        return this._hp > 0;
    }

    recieveDamage(damage: number): void {
        this._hp -= damage;
        if (this._hp < 0) this._hp = 0;
    }
    recieveHealing(amount: number): void {
        this._hp += amount;
    }

    static showTotalCharacters(): void {
        console.log(`現在、合計${this.characterCount}人のキャラクターが生成されています`)
    }
}

class Hero extends Character implements Healer {
    attack(target: Character): void {
        console.log(`${this.name} の攻撃！${target.name} に10のダメージ！`);
        target.recieveDamage(10);
    }
    heal(target: Character): void {
        console.log(`${this.name} は ${target.name} を回復した！`);
        target.recieveHealing(15);
    }
}

class Enemy extends Character {
    attack(target: Character): void {
        console.log(`${this.name} の攻撃！${target.name} に10のダメージ！`);
        target.recieveDamage(10);
    }
}

/*
演習問題2: バトルマネージャーを実装せよ
*/
const isHealer = (character: Character): character is Character & Healer => {
    return "heal" in character;
}

const startBattleTurn = (characters: Character[]): void => {
    characters.forEach((attacker, index) => {
        const targetIndex = (index + 1) % characters.length;
        const target = characters[targetIndex];

        //攻撃を実行する
        if (target) {
            attacker.attack(target);

            //ヒーラーならば回復も実行
            if (isHealer(attacker)) {
                attacker.heal(attacker);
            };
        };
    });
};

const characters: Character[] = [
    new Hero("勇者", 100),
    new Enemy("スライム", 30),
];

startBattleTurn(characters);

/*
演習問題3：静的メンバ（static）とインスタンスの管理
*/
Character.showTotalCharacters();
