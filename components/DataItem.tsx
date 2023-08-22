
export default function DataItem(props: any) {
  const { item, index } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mr-4 w-8 h-8 rounded-full text-white bg-blue-500 flex justify-center items-center">
          <h2 className="absolute text-xl">
          {index}
          </h2>
        </div>
        <h2 className="text-xl">
        "{item}"
        </h2>
      </div>
    </div>
  )
};
