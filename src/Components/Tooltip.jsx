export default function Tooltip({text, position="bottom"}){
    return (
        <span class={`absolute ${position}-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-base-100 text-xs rounded py-1 px-2`}>
        {text}
      </span>
    )
}