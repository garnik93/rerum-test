import data from '../test_data/data.json'

export interface IScenarios {
    stringField: string
    email: string
    phone: number | string
    checkbox: boolean
    title: string
    state: boolean
}

const {
    normal_characters,
    max_characters,
    min_characters,
    checkbox,
    phone,
    email
} = data.valid

const {
    phone_set_10_number,
    phone_set_8_number,
    phone_set_1_9,
    phone_set_0,
    special_symbols,
    over_30_chars,
    zero_chars,
    script,
    sql,
    email_bad_domain,
    email_over,
    email_min,
    invalid_checkbox
} = data.invalid

const ScenariosData: Map<string, IScenarios> = new Map()

ScenariosData.set('RERUM_1', {
    stringField: min_characters,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "valid min characters",
    state: true
})
ScenariosData.set('RERUM_2', {
    stringField: max_characters,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "valid max characters",
    state: true
})
ScenariosData.set('RERUM_3', {
    stringField: normal_characters,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "valid normal characters",
    state: true
})
ScenariosData.set('RERUM_4', {
    stringField: zero_chars,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name zero chars",
    state: false
})
ScenariosData.set('RERUM_5', {
    stringField: sql,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name sql",
    state: false
})
ScenariosData.set('RERUM_6', {
    stringField: over_30_chars,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name over 30 chars",
    state: false
})
ScenariosData.set('RERUM_7', {
    stringField: script,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name script",
    state: false
})
ScenariosData.set('RERUM_8', {
    stringField: special_symbols,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name special symbols",
    state: false
})
ScenariosData.set('RERUM_9', {
    stringField: normal_characters,
    email: email_min,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email min chars",
    state: false
})
ScenariosData.set('RERUM_10', {
    stringField: normal_characters,
    email: email_over,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email over chars",
    state: false
})
ScenariosData.set('RERUM_11', {
    stringField: normal_characters,
    email: email_bad_domain,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email bad domain chars",
    state: false
})
ScenariosData.set('RERUM_12', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_10_number,
    checkbox: checkbox,
    title: "invalid set 10 number",
    state: false
})
ScenariosData.set('RERUM_13', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_8_number,
    checkbox: checkbox,
    title: "invalid set 8 number",
    state: false
})
ScenariosData.set('RERUM_14', {
    stringField: normal_characters,
    email: email,
    phone: normal_characters,
    checkbox: checkbox,
    title: "invalid set chars",
    state: false
})
ScenariosData.set('RERUM_15', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_1_9,
    checkbox: checkbox,
    title: "invalid set 1 - 9",
    state: false
})
ScenariosData.set('RERUM_16', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_0,
    checkbox: checkbox,
    title: "invalid set 0",
    state: false
})
ScenariosData.set('RERUM_17', {
    stringField: normal_characters,
    email: email,
    phone: phone,
    checkbox: invalid_checkbox,
    title: "invalid checkbox",
    state: false
})

export function getScenarios(): IScenarios[] {
    let obj = Object.fromEntries(ScenariosData);
    let scene: IScenarios[] = []
    Object.entries(obj).forEach(([, v]) => {
        scene.push(v)
    })

    return scene
}

export function getScenario(scenario: string): IScenarios {
    if (ScenariosData.get(scenario) === undefined) {
        throw new Error(`Scenario ${scenario} not found!`)
    } else {
        return <IScenarios>ScenariosData.get(scenario)
    }
}