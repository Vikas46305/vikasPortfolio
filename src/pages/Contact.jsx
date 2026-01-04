import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const onSubmit = (e) => {
        e?.preventDefault()
        if (data.name.trim().length === 0) {
            return nameRef.current.focus()
        }
        if (data.email.trim().length === 0) {
            return emailRef.current.focus()
        }
        if (data.message.trim().length === 0 || data.message.length < 100) {
            return messageRef.current.focus()
        }
        return setData({
            name: "",
            email: "",
            message: ""
        })
    }

    const HandleKeyDownEvent = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            return onSubmit();
        }

    }

    const onChange = (value, field) => {
        setData({
            ...data,
            [field]: value
        })
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Get in Touch!</h1>
                <div className="w-16 h-1.5 bg-orange-300 rounded my-1"></div>
            </div>

            <div className="my-5">
                <form onKeyDown={HandleKeyDownEvent} className="space-y-2" onSubmit={onSubmit}>
                    <div className="grid items-center gap-3 my-3 grid-cols-1 md:grid-cols-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-white/10 p-3 rounded-md w-full focus:outline-none border border-transparent focus:border-indigo-500"
                            placeholder="Full Name"
                            value={data.name}
                            onChange={(e) => onChange(e.target.value, "name")}
                            ref={nameRef}
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-white/10 p-3 rounded-md w-full focus:outline-none border border-transparent focus:border-indigo-500"
                            placeholder="Email Id"
                            value={data.email}
                            onChange={(e) => onChange(e.target.value, "email")}
                            ref={emailRef}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message in 150 words"
                            className="w-full h-24 bg-white/10 rounded-xl p-4 focus:outline-none border border-transparent focus:border-indigo-500"
                            value={data.message}
                            onChange={(e) => onChange(e.target.value, "message")}
                            ref={messageRef}
                        >
                        </textarea>
                    </div>
                    <div >
                        <Button
                            variant="outline"
                            type="submit">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;
