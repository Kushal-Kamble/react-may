import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
const Fields = ({ name, email, index }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">{name}</th>
            <th scope="col">{email}</th>
            <th scope="col">
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error">
                Delete
              </Button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Fields;
