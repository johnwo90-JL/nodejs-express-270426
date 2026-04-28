
export function logger(loggingInterface, prefix) {
    return {
        log(...args)   { loggingInterface.log(prefix, ...args); },
        info(...args)  { loggingInterface.info(prefix, ...args); },
        warn(...args)  { loggingInterface.warn(prefix, ...args); },
        error(...args) { loggingInterface.error(prefix, ...args); },
    }
}
