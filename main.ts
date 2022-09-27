basic.forever(function () {
    SCD40.start_continuous_measurement()
    basic.showString("C")
    basic.showString("" + Math.round(SCD40.get_co2()))
    basic.showString("T")
    basic.showString("" + Math.round(SCD40.get_temperature(SCD40.SCD40_T_UNIT.C) * 10) / 10)
    basic.showString("H")
    basic.showString("" + Math.round(SCD40.get_relative_humidity()))
})
