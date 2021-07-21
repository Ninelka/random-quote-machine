export default interface IQuote {
    quote?: string | undefined
    author?: string | undefined
    onUpdateState?: () => void
}