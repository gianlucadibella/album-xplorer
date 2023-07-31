interface Props {
   counter: number;
}

export const AlbumsCounter = ({
    counter,
}: Props) => {
    return (
        <div className="bg-indigo-700 p-2 text-xl text-white rounded-lg border 
                        shadow-sm cursor-default" id="counter">
          { counter }
        </div>
    )
}