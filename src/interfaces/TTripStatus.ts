
export type TTripStatus = openType | closedType

export type closedType = 'deleted' | 'cancel' | 'finish'
export type openType = onGoingType | preparingType

export type onGoingType = stopType | 'moving' | 'odometerStart' | 'odometerEnd' | 'conclusion'
export type stopType = 'break' | 'lunch' | 'ptVisit'

export type preparingType = 'loading' | 'inspecting' | 'selecting'








export const preparingTypeArr: TTripStatus[] = ['loading', 'inspecting', 'selecting']
export const stopTypeArr: TTripStatus[] = ['break', 'lunch', 'ptVisit']
export const onGoingTypeArr: TTripStatus[] = [...stopTypeArr, 'moving', 'odometerStart', 'odometerEnd', 'conclusion']
export const openTypeArr: TTripStatus[] = [...onGoingTypeArr, ...preparingTypeArr,]
export const closedTypeArr: TTripStatus[] = ['deleted', 'cancel', 'finish']
export const TTripStatusArr: TTripStatus[] = [...closedTypeArr, ...openTypeArr]




export const _isTripOnGoing = (status: TTripStatus) => {
    return _statDetecter(onGoingTypeArr, status)
}
export const _isTripOpen = (status: TTripStatus) => {
    return _statDetecter(openTypeArr, status)
}
export const _isTripClosed = (status: TTripStatus) => {
    return _statDetecter(closedTypeArr, status)
}

export const _statDetecter = (statusList: TTripStatus[], status: TTripStatus) => {
    return status !== undefined && statusList.includes(status)
}