

export const Filter = ({ column }) => {
    return <div>{column.canFilter && column.render("Filter")}</div>
}
