

const user = {
    fName = 'Ivan',
    lName = 'Petroff',
    age = 30,
    getFullName: () => {
        return `${this.fName} ${this.lName}`
    }
}

document.querySelector('h1 span').textContent = user.getFullName()