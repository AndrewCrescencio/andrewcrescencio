import { ErrorDisplay } from "@/components/ErrorDisplay";

function Error({ statusCode }) {
  return (
    <ErrorDisplay>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </ErrorDisplay>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
