import EventEmitter from 'wolfy87-eventemitter'

const emitter = new EventEmitter()

export function register(name, callBack, once){
    if(once){
        return emitter.addOnceListener(name, callBack)
    }
    emitter.addListener(name, callBack)
}

export function trigger(name, params){
    emitter.emit(name, params)
}

(() => {
   window.addEventListener("resize", (param) => trigger("window_resize", param));
   window.addEventListener("scroll", (event) => trigger("window_scroll", { top: event.target.body.scrollTop, left: event.target.body.scrollLeft }));
})()
