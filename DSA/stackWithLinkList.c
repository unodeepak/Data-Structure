#include <stdio.h>
#include <stdlib.h>

/* Code for Stack Using Linked List */
struct Node
{
  int data;
  struct Node *next;
};

/* Push the element on top in array */
void push(struct Node *ptr, int *size)
{
  struct Node *elem = (struct Node *)malloc(sizeof(struct Node));
  printf("Enter the element: ");
  scanf("%d", &elem->data);

  elem->next = NULL;

  while (ptr->next != NULL)
  {
    printf("next Value %d, %d", ptr->next, ptr->data);
    ptr = ptr->next;
  }
  ptr->next = elem;
}

/* Delete the Element from top */
void pop(struct Node *ptr)
{
}

/* Display the Element of Array */
void Peep(struct Node *ptr)
{
  printf("Elements is : ");
  while (ptr->next != NULL)
  {
    printf("%d ", ptr->data);
    ptr = ptr->next;
  }
}

int main()
{
  int size;
  printf("Enter the size of array : ");
  scanf("%d", &size);

  struct Node *head;
  head = (struct Node *)malloc(sizeof(struct Node));
  head->next = NULL;

  while (1)
  {
    printf("\n<========================>\n\n");
    printf("1. For Push Element\n");
    printf("2. For Pop Element\n");
    printf("3. For Peep Element\n");
    printf("4. For Quite\n");
    printf("\n<========================>\n\n");

    int ch, flag = 0;
    printf("Plz Enter the above given choice : ");
    scanf("%d", &ch);

    switch (ch)
    {
    case 1:
      push(head, &size);
      break;

    case 2:
      pop(head);
      break;

    case 3:
      Peep(head);
      break;

    case 4:
      flag = 1;
      break;

    default:
      printf("\n\n======> Plz Enter 1 or 2 or 3 or 4 Only <=======\n\n");
      break;
    }

    if (flag)
    {
      break;
    }
  }

  free(head);
  return 0;
}