import color from 'mocha'

class Logger {
    private readonly colors = color.reporters.Base.color

    addLog (status: string, color: string = 'pending', message: string, perform: string) {
        let date = new Date()
        console.log(`${this.colors(color, status)} [${date.getDate()}.${date.getUTCDay()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] STEP -> [ ${message} ] -> ${this.colors(color === 'pending' ? 'green' : 'bright fail', perform)}`)
    }

    enter() {
        console.log()
    }
}

export default new Logger()
