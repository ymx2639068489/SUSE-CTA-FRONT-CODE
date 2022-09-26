function getClassOptions() {
    let childrenOption = []
    for(let i = 1; i <= 10; i ++ ) {
        childrenOption.push({
            value: i,
            label: i + "班",
        })
    }
    let options = []
    let date = new Date()
    let year = date.getFullYear()
    if(date.getMonth() < 7) {
        year --;
    }
    for(let i = 0; i < 4; i ++ ) {
        options.push({
            value: year - i,
            label: year - i,
            children: childrenOption,
        })
    }
    return options
}

export { getClassOptions }