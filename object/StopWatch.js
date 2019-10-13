function Watch() {
    let startTime, endTime, running, duration = 0

    
    this.start = function() {
        if(running) {
            throw new Error('Watch is already running.')
        }
        running = true
        startTime = new Date()
    }

    this.stop = function() {
        if(!running) {
            throw new Error('Watch is not running.')
        }
        running = false
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function() {
        running = false
        startTime = null
        endTime = null
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get : function() {
            return duration
        }
    })
}

const StopWatch = new Watch()
