function Watch() {
    let startTime, endTime, running, duration = 0

    Object.defineProperty(this, 'startTime', {
        get : function() {
            return startTime
        }
    })

    Object.defineProperty(this, 'endTime', {
        get : function() {
            return endTime
        }
    })

    Object.defineProperty(this, 'running', {
        get : function() {
            return running
        }
    })

    Object.defineProperty(this, 'duration', {
        get : function() {
            return duration
        },
        set : function(value) {
            return duration = value
        }
    })
}

Watch.prototype.start = function() {
    if(this.running) {
        throw new Error('Watch is already running.')
    }
    this.running = true
    this.startTime = new Date()
}

Watch.prototype.stop = function() {
    if(!this.running) {
        throw new Error('Watch is not running.')
    }
    this.running = false
    this.endTime = new Date()

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    this.duration += seconds
}

Watch.prototype.reset = function() {
    this.running = false
    this.startTime = null
    this.endTime = null
    this.duration = 0
}

const StopWatch = new Watch()

// we have ignore this type of object "premature code is the evil of all codes."
