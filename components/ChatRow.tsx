
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type Props = {
    id: string,
}
const ChatRow = ({ id }: Props) => {
    return (
        <Link
            className={`chatRow justify-center`}
            href={`/chat/${id}`}
        >
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <p className="hiden flex-1 md:inline-flex truncate">New Chat</p>
            <TrashIcon className="h-5 w- text-gray-700 hover:text-red-700" />
        </Link>
    )
}

export default ChatRow