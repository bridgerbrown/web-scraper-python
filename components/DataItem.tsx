
export default function DataItem(props: any) {
  const { item, index, type } = props;

  return (
    <div>
      <div className="flex text-left items-center justify-between">
        <div>
          <div className="mr-4 w-7 h-7 rounded-full bg-slate-300 flex justify-center items-center">
            <h2 className="absolute text-base">
            {index}
            </h2>
          </div>
        </div>
        {type != "Link" ?
          type != "Heading" ?
            <h2 className="text-base">
            `{item}`
            </h2>
            :
            <h2 className={`
              ${item[0] === 'h1' ? 'text-xl font-semibold' :
               item[0] === 'h2' ? 'text-lg font-medium' :
               item[0] === 'h3' ? 'text-base font-normal' :
               item[0] === 'h4' ? 'text-sm' :
               item[0] === 'h5' ? 'text-xs' :
               item[0] === 'h6' ? 'text-sm' :
               item[0] === 'h7' ? 'text-sm' : ''}
            `}>
            `{item[1]}`
            </h2>
          :
          <a 
            href={item[1]}
            target="_blank" rel="noopener noreferrer"
            className="text-blue-500 underline underline-offset-2"
          >
            {item[0]}
          </a>
        }
      </div>
    </div>
  )
};
