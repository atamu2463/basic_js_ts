/*
演習問題1：RPGの戦闘システムを設計せよ
*/

interface Healer {
    heal(target: Character): void;
}

abstract class Character {

    constructor(
        public readonly name: string,
        protected _hp: number
    ) {}

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

