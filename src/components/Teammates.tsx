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
    <div id="teammates">
      <h1>Teammates</h1>
      <ul>
        {props.teammates.map((teammate: Teammate, id: number) => teammatesListItem(teammate, id))}
      </ul>
    </div>
  )
}

const teammatesListItem = (teammate: Teammate, id: number): React.ReactElement => {
  return <li key={id}>{teammate.name}</li>
}
