﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BookSender.Data;
using BookSender.Helpers;
using BookSender.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookSender.Controllers
{
	[Authorize]
	public class OrderController : Controller
	{
		private readonly ApplicationContext _context;

		public OrderController(ApplicationContext context)
		{
			_context = context;
		}

		public IActionResult Index()
		{

			return View();
		}

		public JsonResult Order(int bookId)
		{
			try
			{
				var userId = User.Claims.FirstOrDefault(C => C.Type == ClaimTypes.NameIdentifier).Value;

				var user = _context.Users.FirstOrDefault(u => u.Id == int.Parse(userId));

				var book = _context.Books.FirstOrDefault(b => b.Id == bookId);

				if (book != null)
				{
					BookForOrder bookModel = new BookForOrder
					{
						Title = book.Title,
						Author = book.Author,
						Description = book.Description,
						BookTypeId = book.BookTypeId,
						GenreId = book.GenreId,
						CreatedOn = book.CreatedOn,
						PrintedOn = book.PrintedOn,
						photoInBinnary = PictureHelper.ConvertToString(book.Picture.ImageData),
						Price = book.Price,
						OwnerEmail = book.CurrentUser.Email,
						OwnerId = book.CurrentUserId,
						OwnerFirstName = book.CurrentUser.FirstName,
						OwnerLastName = book.CurrentUser.LastName,
						OwnerPhoneNumber = book.CurrentUser.PhoneNumber,
					};

					return Json(bookModel);
				}
				else
				{
					return Json("Error: " + "Not found");
				}
			}
			catch (Exception e)
			{
				return Json("Error: " + e.Message);
			}
		}
	}
}