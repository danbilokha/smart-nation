﻿using System;

namespace BookSender.Models
{
	public class Review
    {
		public int Id { get; set; }

		public string Text { get; set; }

		public int? UserId { get; set; }

		public int? CommentorId { get; set; }

		public DateTime CreatedOn { get; set; }

		public User User { get; set; }

		public User Commentor { get; set; }

	}
}
