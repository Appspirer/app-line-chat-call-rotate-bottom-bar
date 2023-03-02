import React from "react";
import home_ic from '../assets/svgs/home_ic.svg'
import chat_ic from '../assets/svgs/chat_ic.svg'
import call_ic from '../assets/svgs/call_ic.svg'
import ic_direction from '../assets/svgs/ic_direction.svg'
import search from '../assets/svgs/search.svg'
import call_missed from '../assets/svgs/call_missed.svg'
import call_done from '../assets/svgs/call_done.svg'
import checked from '../assets/svgs/checked.svg'
import beer from '../assets/svgs/beer.svg'
import phone from '../assets/svgs/phone.svg'
import dot_ver from '../assets/svgs/dot_ver.svg'
import machine from '../assets/svgs/machine.svg'
import record from '../assets/svgs/record.svg'
import next from '../assets/svgs/next.svg'
import call from '../assets/svgs/call.svg'
import speaker from '../assets/svgs/speaker.svg'
import gallery from '../assets/svgs/gallery.svg'
import hold from '../assets/svgs/hold.svg'
import bluetooth from '../assets/svgs/bluetooth.svg'
import mute from '../assets/svgs/mute.svg'
import location from '../assets/svgs/location.svg'

const SVGs = {
    home_ic,
    chat_ic,
    call_ic,
    ic_direction,
    search,
    call_done,
    call_missed,
    checked,
    beer,
    phone,
    dot_ver,
    machine,
    record,
    next,
    call,
    speaker,
    gallery,
    hold,
    bluetooth,
    mute,
    location
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}