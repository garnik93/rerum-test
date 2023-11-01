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
    email_min_length,
    email_max_length,
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
    phone_chars,
    special_symbols,
    over_30_chars,
    zero_chars,
    script,
    sql,
    email_with_no_values,
    email_over_length,
    email_without_domain,
    email_values_1,
    email_values_2,
    email_values_3,
    email_values_4,
    email_values_5,
    invalid_checkbox
} = data.invalid

const ScenariosData: Map<string, IScenarios> = new Map()
// valid name/lastname
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
// valid email
ScenariosData.set('RERUM_4', {
    stringField: normal_characters,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "valid email",
    state: true
})
ScenariosData.set('RERUM_5', {
    stringField: normal_characters,
    email: email_max_length,
    phone: phone,
    checkbox: checkbox,
    title: "valid email max chars",
    state: true
})
ScenariosData.set('RERUM_6', {
    stringField: normal_characters,
    email: email_min_length,
    phone: phone,
    checkbox: checkbox,
    title: "valid email min chars",
    state: true
})
// valid phone
ScenariosData.set('RERUM_7', {
    stringField: normal_characters,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "valid phone number",
    state: true
})
// invalid leave all fields blank
ScenariosData.set('RERUM_8', {
    stringField: zero_chars,
    email: zero_chars,
    phone: zero_chars,
    checkbox: checkbox,
    title: "valid checkbox",
    state: false
})
// invalid fill in all fields except
ScenariosData.set('RERUM_9', {
    stringField: normal_characters,
    email: email,
    phone: phone,
    checkbox: invalid_checkbox,
    title: "invalid checkbox",
    state: false
})
// invalid name/lastname
ScenariosData.set('RERUM_10', {
    stringField: zero_chars,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid blank name & lastname",
    state: false
})
ScenariosData.set('RERUM_11', {
    stringField: over_30_chars,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name over 30 chars",
    state: false
})
ScenariosData.set('RERUM_12', {
    stringField: special_symbols,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name special symbols",
    state: false
})
ScenariosData.set('RERUM_13', {
    stringField: script,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name script",
    state: false
})
ScenariosData.set('RERUM_14', {
    stringField: sql,
    email: email,
    phone: phone,
    checkbox: checkbox,
    title: "invalid name sql",
    state: false
})
// invalid email
ScenariosData.set('RERUM_15', {
    stringField: normal_characters,
    email: email_with_no_values,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email with no value",
    state: false
})
ScenariosData.set('RERUM_16', {
    stringField: normal_characters,
    email: email_values_1,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email value '['",
    state: false
})
ScenariosData.set('RERUM_17', {
    stringField: normal_characters,
    email: email_values_2,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email value ']'",
    state: false
})
ScenariosData.set('RERUM_18', {
    stringField: normal_characters,
    email: email_values_3,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email value '\\'",
    state: false
})
ScenariosData.set('RERUM_19', {
    stringField: normal_characters,
    email: email_values_4,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email value ';'",
    state: false
})
ScenariosData.set('RERUM_20', {
    stringField: normal_characters,
    email: email_values_5,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email value ','",
    state: false
})
ScenariosData.set('RERUM_21', {
    stringField: normal_characters,
    email: email_without_domain,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email without domain",
    state: false
})
ScenariosData.set('RERUM_22', {
    stringField: normal_characters,
    email: email_over_length,
    phone: phone,
    checkbox: checkbox,
    title: "invalid email over length chars",
    state: false
})
// invalid phone
ScenariosData.set('RERUM_23', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_8_number,
    checkbox: checkbox,
    title: "invalid set 8 number",
    state: false
})
ScenariosData.set('RERUM_24', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_10_number,
    checkbox: checkbox,
    title: "invalid set 10 number",
    state: false
})
ScenariosData.set('RERUM_25', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_0,
    checkbox: checkbox,
    title: "invalid set 0",
    state: false
})
ScenariosData.set('RERUM_26', {
    stringField: normal_characters,
    email: email,
    phone: phone_set_1_9,
    checkbox: checkbox,
    title: "invalid set 1 - 9",
    state: false
})
ScenariosData.set('RERUM_27', {
    stringField: normal_characters,
    email: email,
    phone: phone_chars,
    checkbox: checkbox,
    title: "invalid set phone chars",
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