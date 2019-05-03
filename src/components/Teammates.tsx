import * as React from 'react'

interface Teammate {
  name: String
  timeZone: String
}
interface TeammatesProps {
  teammates: Array<Teammate>
}

export const Teammates: React.FunctionComponent<TeammatesProps> & {} = props => {
  return (
    <div>
      <h1>Teammates</h1>
      <ul>
        {props.teammates.map((teammate: Teammate, id: number) => teammatesListItem(teammate, id))}
      </ul>
    </div>
  )
}

const teammatesListItem = (teammate: Teammate, id: number): React.ReactElement => {
  return <li id="">{teammate.name}</li>
}
