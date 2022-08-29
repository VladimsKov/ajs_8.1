// Homework ajs_8.1
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
      return;
    }
    throw new Error('Персонаж не добавлен - уже есть в команде');
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
