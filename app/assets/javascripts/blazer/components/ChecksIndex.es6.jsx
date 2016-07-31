class ChecksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: []
    }
  }

  render() {
    return (
      <div>
        <p style={{float: "right"}}>
          <Link to={Routes.blazer_new_check_path()} className="btn btn-info">New Check</Link>
        </p>
        <Nav />
        <table className="table">
          <thead>
            <tr>
              <th>Query</th>
              <th style={{width: "10%"}}>State</th>
              <th style={{width: "10%"}}>Run</th>
              <th style={{width: "20%"}}>Emails</th>
              <th style={{width: "15%"}}></th>
            </tr>
          </thead>
          <tbody>
            {this.state.checks.map(function(check, i){
              return (
                <tr>
                  <td>
                    <Link to={Routes.blazer_query_path(check.query.id)}>{check.query.name}</Link>
                    <span class="text-muted">
                      {check.check_type ? check.check_type.replace("_", "") : null}
                    </span>
                  </td>
                  <td>
                  </td>
                  <td>
                    {check.schedule}
                  </td>
                  <td>
                    <ul class="list-unstyled" style="margin-bottom: 0;">
                    </ul>
                  </td>
                  <td style="text-align: right; padding: 1px;">
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Checks";
  }
}