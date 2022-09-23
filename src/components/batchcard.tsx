import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BatchCard({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string;
}) {
  return (
    <div
      className={`p-4 flex flex-col h-[16rem] sm:h-72 aspect-[5/4] bg-primary-500 rounded-2xl duration-300`}
    >
      <img
        className="bg-white rounded-xl aspect-video w-full"
        src={thumbnail}
        alt="batch image"
      />
      <div className="flex justify-between py-2 sm:flex-col items-center">
        <div className="py-2 h-full text-white font-semibold min-w-fit">
          {title}
        </div>
        <div className="flex flex-row-reverse sm:flex-row w-full justify-between gap-2">
          <Link to="/" className="hidden sm:block">
            <Button
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="small"
            >
              Share
            </Button>
          </Link>
          <Link to="/">
            <Button
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: 12,
              }}
              variant="contained"
              size="small"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}