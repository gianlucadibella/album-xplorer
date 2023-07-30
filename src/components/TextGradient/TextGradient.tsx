interface Props
{
    text: string;
    from?: string;
    via?: string;
    to?: string;
    size?: string;
}

export const TextGradient = ( {
    text,
    from,
    via,
    to,
    size
}: Props ) =>
{

    const fromColor = from || 'from-blue-400';
    const viaColor = via || 'via-blue-600';
    const toColor = to || 'to-indigo-700';
    const textSize = size || 'text-2xl';

    return (
        <h1 className={ `${textSize} font-extrabold bg-gradient-to-r ${fromColor} ${viaColor} ${toColor} text-transparent bg-clip-text bg-300% animate-gradient`}>
            { text }
        </h1>
    )

}