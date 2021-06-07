import Avatar from 'react-avatar';

export default ({ firstname, lastname, size }) => {
  return (
    <div className="avatar">
        <Avatar name={firstname+" "+lastname} maxInitials={2} size={size} round={true}/>

      <style jsx>{`
        .avatar {
          display: inline-block;
          vertical-align: middle;
        }
        .avatar :global(svg) {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}