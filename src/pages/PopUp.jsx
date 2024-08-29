import Swal from "sweetalert2";

export default function PopUp() {
  return (
    <div>
      <button
        onClick={() =>
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          })
        }
      >
        click me
      </button>
    </div>
  );
}
