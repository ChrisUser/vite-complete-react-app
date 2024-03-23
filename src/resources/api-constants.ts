const baseUrl = 'http://exampleurl'

export const getData = (userId: number): string => {
    return baseUrl + '/data/' + userId
}