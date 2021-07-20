/*
    metrics.ts -
 */
import {SenseLogs, print, dump, delay} from './utils/init'

// jest.setTimeout(7200 * 1000)

test('metrics', async() => {
    const log = new SenseLogs({name: 'test', destination: 'capture'})

    log.metrics('Acme/Rockets', {sessions: 1})
    let result: any = log.flush()[0]
    expect(result.indexOf('{"_aws":')).toBe(0)
    expect(result.indexOf('"Namespace":"Acme/Rockets"') > 0).toBe(true)
    expect(result.indexOf('"Name":"sessions"') > 0).toBe(true)
})

test('metrics via JSON', async() => {
    const log = new SenseLogs()

    let save = console.log
    console.log = () => {}

    log.metrics('Acme/Rockets', {sessions: 1})

    console.log = save
})

test('metrics when disabled', async() => {
    const log = new SenseLogs()
    log.setFilter()
    log.metrics('Acme/Rockets', {sessions: 1})
})

test('metrics scenarios', async() => {
    const log = new SenseLogs()
    // log.metrics('Acme/Rockets', {sessions: 1})
})
