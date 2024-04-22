function createError(error) {
    return { status: 'Error', error }
}

function createResult(result) {
    return { status: 'success', result }
}

function createResponse(error, result) {
    if (error) {
        return createError(error)
    }
    else {
        return createResult(result)
    }
}

module.exports = {
    createError, createResult, createResponse,
}
